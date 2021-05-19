#!/usr/bin/python3
# -*- coding: utf-8 -*-
from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type:text/html\r\n\r\n")
db = Avistamiento("localhost", "root", "", "tarea2")
data = db.get_all()

static = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Listado de avistamientos</title>
    <link rel="stylesheet" href="../style/listado-avistamientos.css">
</head>

<body>
<header>
    <h1>Listado de avistamientos</h1>
</header>

<table>
    <tr>
        <th>Fecha - Hora</th>
        <th>Comuna</th>
        <th>Sector</th>
        <th>Nombre contacto</th>
    </tr>
"""

print(static, file=utf8stdout)

rows = 0
for d in data:
    while rows < 5:
        row = f"""
            <tr>
                <td>{str(d[0])}</td>
                <td>{str(d[1])}</td>
                <td>{str(d[2])}</td>
                <td>{str(d[3])}</td>
            </tr>
        """
        print(row, file=utf8stdout)
        rows += 1

cantidad_paginas = (len(data) // 5) + 1
datos_ultima_pagina = lambda: 5 if len(data) % 5 == 0 else len(data) % 5
