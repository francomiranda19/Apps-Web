#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgi
from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type:text/html; charset=UTF-8")
id0 = cgi.FieldStorage().getfirst("id")
if id0 is None:
    id0 = 0
id_avistamiento = int(id0)

bbdd = Avistamiento("localhost", "root", "", "tarea2")
info = bbdd.get_lugar_and_datos(id_avistamiento)

print(".")
print(".")
print(".")
print(".")
print(".")
print(".")
print(info)

static = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Información de avistamiento</title>
    <link rel="stylesheet" href="../static/style/info-avistamiento.css">
</head>

<body>

<header>
    <h1>Información de avistamiento</h1>
</header>

<div class="informacion">
    <div class="lugar"><b><u>Lugar</u></b><br>
        Región: {str(info[0])}<br>
        Comuna: {str(info[1])}<br>
        Sector: {str(info[2])}
    </div>
    <div class="datos-contacto"><b><u>Datos de contacto</u></b><br>
        Nombre: {str(info[3])}<br>
        Email: {str(info[4])}<br>
        Número de celular: {str(info[5])}
    </div>
</div>
"""
print(static, file=utf8stdout)

footer = """
<div class="botones">
    <div class="boton-portada">
        <ul>
            <li><a href="portada.py">Volver a la portada</a></li>
        </ul>
    </div>
    <div class="boton-listado">
        <ul>
            <li><a href="listado-avistamientos.py?id=0">Volver al listado de avistamientos</a></li>
        </ul>
    </div>
</div>

</body>

</html>
"""
print(footer, file=utf8stdout)
