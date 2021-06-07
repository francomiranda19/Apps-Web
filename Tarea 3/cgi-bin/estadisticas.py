#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgi
import json

from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type: text/html\r\n\r\n")
bbdd = Avistamiento()
avistamientos_por_dia = bbdd.get_avistamientos_por_dia()
conteo_tipos = bbdd.get_conteo_tipos()
conteo_vivos = bbdd.get_conteo_estados("vivo")
conteo_muertos = bbdd.get_conteo_estados("muerto")
conteo_nose = bbdd.get_conteo_estados("no sé")

puntos = {"x1": [1, 2, 3, 4, 5, 6, 7], "y1": [0, 0, 0, 0, 0, 0, 0],
          "tipo": ["arácnido", "insecto", "miriápodo", "no sé"], "y2": [0, 0, 0, 0],
          "x3": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "vivo": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "muerto": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "no se": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}

for fila in avistamientos_por_dia:
    puntos["y1"][fila[0] - 2] = fila[1]

for fila in conteo_tipos:
    i = puntos["tipo"].index(fila[0])
    puntos["y2"][i] = fila[1]

for fila in conteo_vivos:
    puntos["vivo"][fila[0] - 1] = fila[1]

for fila in conteo_muertos:
    puntos["muerto"][fila[0] - 1] = fila[1]

for fila in conteo_nose:
    puntos["no se"][fila[0] - 1] = fila[1]

print(json.dumps(puntos), file=utf8stdout)
