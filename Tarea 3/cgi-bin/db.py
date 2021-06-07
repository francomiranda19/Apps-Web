#!/usr/bin/python3
# -*- coding: utf-8 -*-
import hashlib
import json
import os
import filetype
import mysql.connector
from datetime import datetime
from utils import print_error


class Avistamiento:

    def __init__(self):
        self.bbdd = mysql.connector.connect(
            host="localhost",
            user="root",  # cc5002_u
            password="",  # llismetusp
            database="cc500225_db"
        )
        self.cursor = self.bbdd.cursor()

    def save_info(self, data):
        dia_hora_formulario = data[0]
        region = data[1]
        comuna = data[2]
        sector = data[3]
        nombre = data[4]
        email = data[5]
        celular = data[6]
        dia_hora = data[7]
        tipo = data[8]
        estado = data[9]
        imagenes = data[10]

        sql = f"""
            SELECT id FROM comuna WHERE nombre='{comuna}';
        """
        self.cursor.execute(sql)

        comuna_id = self.cursor.fetchall()[0][0]
        sql = f"""
            INSERT INTO avistamiento (comuna_id, dia_hora, sector, nombre, email, celular)
            VALUES ('{comuna_id}', '{dia_hora_formulario}', '{sector}', '{nombre}', '{email}', '{celular}');
        """
        self.cursor.execute(sql)

        id_archivo = self.cursor.getlastrowid()
        sql = """
            INSERT INTO detalle_avistamiento (dia_hora, tipo, estado, avistamiento_id) 
            VALUES (%s, %s, %s, %s);
        """
        if type(dia_hora) == list:
            for i in range(len(dia_hora)):
                self.cursor.execute(sql, (dia_hora[i].value, tipo[i].value, estado[i].value, id_archivo))
                id_avistamiento = self.cursor.getlastrowid()
                self.save_imagenes(imagenes[i], id_avistamiento)
                self.bbdd.commit()
        else:
            self.cursor.execute(sql, (dia_hora, tipo, estado, id_archivo))
            id_avistamiento = self.cursor.getlastrowid()
            self.save_imagenes(imagenes[0], id_avistamiento)
            self.bbdd.commit()

    def save_imagenes(self, imagenes, id_avistamiento):
        for i in range(len(imagenes)):
            fileitem = imagenes[i]
            filename = fileitem.filename

            sql = "SELECT COUNT(id) FROM foto"
            self.cursor.execute(sql)
            total = self.cursor.fetchall()[0][0] + 1

            hash_archivo = str(total) + hashlib.sha256(filename.encode()).hexdigest()[0:30]

            file_path = "media/" + hash_archivo
            open(file_path, "wb").write(fileitem.file.read())

            tipo_archivo = filetype.guess(file_path)
            if tipo_archivo.mime != "image/png" and tipo_archivo.mime != "image/jpg" and tipo_archivo.mime != "image/jpeg":
                os.remove(file_path)
                self.bbdd.rollback()
                print_error(["El archivo ingresado no tiene un formato de imagen válido"])
                exit()

            sql = f"""
                INSERT INTO foto (ruta_archivo, nombre_archivo, detalle_avistamiento_id)
                VALUES ('{hash_archivo}', '{filename}', '{id_avistamiento}');
            """
            self.cursor.execute(sql)

    def get_id(self, fecha_hora, nombre_comuna, nombre_sector, nombre_contacto):
        sql = f"""
            SELECT AV.id FROM avistamiento AV, detalle_avistamiento DA, comuna CO
            WHERE AV.dia_hora='{fecha_hora}' AND CO.nombre='{nombre_comuna}'
            AND AV.sector='{nombre_sector}' AND AV.nombre='{nombre_contacto}'
            AND DA.avistamiento_id=AV.id AND AV.comuna_id=CO.id;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()[0][0]

    def get_info_avistamiento(self, id_avistamiento):
        sql = f"""
            SELECT RE.nombre, CO.nombre, AV.sector, AV.nombre, AV.email, AV.celular, DA.dia_hora, DA.tipo, DA.estado
            FROM region RE, comuna CO, avistamiento AV, detalle_avistamiento DA
            WHERE AV.id='{id_avistamiento}' AND DA.avistamiento_id=AV.id AND AV.comuna_id=CO.id AND CO.region_id=RE.id;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_info_imagen(self, id_avistamiento):
        sql = f"""
            SELECT ruta_archivo FROM foto F, detalle_avistamiento DA , avistamiento AV
            WHERE F.detalle_avistamiento_id=DA.id AND DA.avistamiento_id=AV.id
            AND AV.id='{id_avistamiento}';
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def count_avistamientos(self, id_avistamiento):
        sql = f"""
            SELECT COUNT(id) FROM detalle_avistamiento WHERE avistamiento_id='{id_avistamiento}';
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()[0][0]

    def count_imagenes_por_avistamiento(self, id_avistamiento):
        sql = f"""
            SELECT COUNT(F.id) FROM foto F, detalle_avistamiento DA, avistamiento AV
            WHERE F.detalle_avistamiento_id=DA.id AND DA.avistamiento_id='{id_avistamiento}'
            AND AV.id='{id_avistamiento}' GROUP BY F.detalle_avistamiento_id;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_last5(self):
        sql = """
            SELECT AV.dia_hora, CO.nombre, AV.sector, DA.tipo, F.ruta_archivo FROM avistamiento AV, detalle_avistamiento DA, comuna CO,
            (SELECT detalle_avistamiento_id, ruta_archivo FROM foto GROUP BY detalle_avistamiento_id) AS F
            WHERE DA.avistamiento_id=AV.id AND AV.comuna_id=CO.id AND F.detalle_avistamiento_id=DA.id
            ORDER BY AV.dia_hora DESC LIMIT 5;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_all(self):
        sql = """
            SELECT DISTINCT AV.dia_hora, CO.nombre, AV.sector, AV.nombre FROM avistamiento AV, detalle_avistamiento DA, comuna CO
            WHERE DA.avistamiento_id=AV.id AND AV.comuna_id=CO.id
            ORDER BY AV.dia_hora DESC;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_avistamientos_por_dia(self):
        sql = """
            SELECT DAYOFWEEK(dia_hora) AS dia, COUNT(*) AS conteo FROM detalle_avistamiento GROUP BY dia;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_conteo_tipos(self):
        sql = """
            SELECT tipo, COUNT(*) as conteo FROM detalle_avistamiento GROUP BY tipo;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_conteo_estados(self, estado):
        sql = f"""
            SELECT MONTH(dia_hora) AS mes, COUNT(*) AS conteo FROM detalle_avistamiento WHERE estado='{estado}' GROUP BY mes
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()
