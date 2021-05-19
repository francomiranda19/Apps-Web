#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgi
import cgitb
import os
from db import Avistamiento
from datetime import datetime
from utils import print_error

now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

MAX_FILE_SIZE = 10000 * 1000  # 10 MB

print("Content-type: text/html; charset=UTF-8")

cgitb.enable()
utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

form = cgi.FieldStorage()
bbdd = Avistamiento("localhost", "root", "", "tarea2")

fileobj = form["foto-avistamiento"]
if not fileobj.filename:
    print_error("Foto no subida")

size = os.fstat(fileobj.file.fileno()).st_size

if size > MAX_FILE_SIZE:
    print_error("Tamaño de archivo mayor a 10 MB")

data = (
    now,
    form["region"].value, form["comuna"].value, form["sector"].value,
    form["nombre"].value, form["email"].value, form["celular"].value,
    form["dia-hora-avistamiento"].value, form["tipo-avistamiento"].value, form["estado-avistamiento"].value,
    fileobj
)

bbdd.save_info(data)

html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recibido!</title>
    <link rel="stylesheet" href="../static/style/informacion-recibida.css">
</head>

<body>
<header>
    <h2>Hemos recibido su información, muchas gracias por colaborar</h2>
</header>

<ul>
    <li><a href="portada.py">Volver a la portada</a></li>
</ul>
</body>
</html>
"""
print(html, file=utf8stdout)
