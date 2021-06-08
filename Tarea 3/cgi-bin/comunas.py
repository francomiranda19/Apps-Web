#!/usr/bin/python3
# -*- coding: utf-8 -*-
import functools
import json
from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type: text/html\r\n\r\n")
bbdd = Avistamiento()
comunas_con_avistamientos = bbdd.get_comunas_con_avistamientos()

f = open("../latitud-longitud.json", "r", encoding="utf-8")
comunas_totales = json.load(f)

nombres_comunas = []
for i in range(len(comunas_totales["comunas"])):
    nombres_comunas.append(comunas_totales["comunas"][i]["name"])

comunas = {"comunas": []}

for i in range(len(comunas_con_avistamientos)):
    index = nombres_comunas.index(comunas_con_avistamientos[i][1])
    name = comunas_totales["comunas"][index]["name"]
    ids_por_comuna = bbdd.get_ids_por_comuna(name)
    cantidad_por_avistamiento = []
    for j in range(len(ids_por_comuna)):
        imagenes_por_avistamiento = bbdd.fotos_por_avistamiento_segun_comuna(name)
        cantidad_por_avistamiento.append(imagenes_por_avistamiento[j][0])
    imagenes_totales_por_avistamiento = functools.reduce(lambda a, b: a + b, cantidad_por_avistamiento)
    cantidad_avistamientos = bbdd.count_avistamientos_por_comuna(name)
    lng = float(comunas_totales["comunas"][index]["lng"])
    lat = float(comunas_totales["comunas"][index]["lat"])
    avistamientos = bbdd.get_avistamientos_en_una_comuna(name)
    fotos_por_comuna = bbdd.get_fotos_por_comuna(name)
    ids = []
    dia_hora = []
    tipo = []
    estado = []
    ruta = []
    for j in range(len(avistamientos)):
        ids.append(avistamientos[j][0])
        dia_hora.append(avistamientos[j][1].strftime("%Y-%m-%d %H:%M:%S"))
        tipo.append(avistamientos[j][2])
        estado.append(avistamientos[j][3])
    for j in range(imagenes_totales_por_avistamiento):
        ruta.append(fotos_por_comuna[j][0])

    data = {
        "cantidad": cantidad_avistamientos,
        "total": cantidad_por_avistamiento,
        "name": name,
        "lng": lng,
        "lat": lat,
        "id": ids,
        "dia_hora": dia_hora,
        "tipo": tipo,
        "estado": estado,
        "ruta": ruta
    }

    if data not in comunas["comunas"]:
        comunas["comunas"].append(data)

print(json.dumps(comunas), file=utf8stdout)
