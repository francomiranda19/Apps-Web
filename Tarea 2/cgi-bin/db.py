#!/usr/bin/python3
# -*- coding: utf-8 -*-
import hashlib
import os
import filetype
import mysql.connector
from utils import print_error
import re


class Avistamiento:

    def __init__(self, host, user, password, database):
        self.bbdd = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
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
        tipo_avistamiento = data[8]
        estado_avistamiento = data[9]

        fileitem = data[10]
        filename = fileitem.filename

        sql = "SELECT COUNT(id) FROM foto"
        self.cursor.execute(sql)
        total = self.cursor.fetchall()[0][0] + 1

        hash_archivo = str(total) + hashlib.sha256(filename.encode()).hexdigest()[0:30]

        file_path = "media/" + hash_archivo
        open(file_path, "wb").write(fileitem.file.read())

        tipo = filetype.guess(file_path)
        if tipo.mime != "image/png" and tipo.mime != "image/jpg" and tipo.mime != "image/jpeg":
            os.remove(file_path)
            print_error("Tipo de archivo inválido, debe ser una imagen")

        sql = f"""
            SELECT id FROM comuna WHERE nombre='{comuna}'
        """
        self.cursor.execute(sql)
        comuna_id = self.cursor.fetchall()[0][0]

        sql = f"""
            INSERT INTO avistamiento (comuna_id, dia_hora, sector, nombre, email, celular)
            VALUES ('{comuna_id}', '{dia_hora_formulario}', '{sector}', '{nombre}', '{email}', '{celular}');
        """
        self.cursor.execute(sql)
        self.bbdd.commit()

        id_archivo = self.cursor.getlastrowid()

        sql = f"""
            INSERT INTO detalle_avistamiento (dia_hora, tipo, estado, avistamiento_id) 
            VALUES ('{dia_hora}', '{tipo_avistamiento}', '{estado_avistamiento}', '{id_archivo}');
        """
        self.cursor.execute(sql)
        self.bbdd.commit()

        sql = f"""
            INSERT INTO foto (ruta_archivo, nombre_archivo, detalle_avistamiento_id)
            VALUES ('{hash_archivo}', '{filename}', '{id_archivo}');
        """
        self.cursor.execute(sql)
        self.bbdd.commit()

    def get_last5(self):
        sql = """
            SELECT AV.dia_hora, CO.nombre, AV.sector, DA.tipo, F.ruta_archivo FROM avistamiento AV, detalle_avistamiento DA, comuna CO, foto F 
            WHERE DA.avistamiento_id = AV.id AND AV.comuna_id=CO.id AND F.detalle_avistamiento_id=DA.id ORDER BY AV.dia_hora DESC LIMIT 5;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()

    def get_all(self):
        sql = """
            SELECT DA.dia_hora, CO.nombre, AV.sector, AV.nombre FROM detalle_avistamiento DA, comuna CO, avistamiento AV
            WHERE DA.avistamiento_id = AV.id AND AV.comuna_id = CO.id ORDER BY DA.dia_hora;
        """
        self.cursor.execute(sql)
        return self.cursor.fetchall()
