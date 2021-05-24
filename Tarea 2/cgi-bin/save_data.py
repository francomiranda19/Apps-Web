#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgi
import cgitb
import os
from db import Avistamiento
from datetime import datetime
from utils import print_error
import re as regex

now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

MAX_FILE_SIZE = 10 * 1000000  # 10 MB

print("Content-type: text/html\r\n\r\n")

cgitb.enable()
utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

form = cgi.FieldStorage()
bbdd = Avistamiento()

region = form["region"].value
comuna = form["comuna"].value
sector = form["sector"].value
nombre = form["nombre"].value
email = form["email"].value
celular = form["celular"].value

sector_regex = "^[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[0-9a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
nombre_regex = "^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
email_regex = "^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$"
celular_regex = "^[+][0-9]+$"
dia_hora_regex = "^\d{2,4}\-\d{1,2}\-\d{1,2}[\s]([01]?[0-9]|2[0-3]):[0-5][0-9]$"

imagenes = []
imagenes_avistamiento = []
for i in form.list:
    if i.name == 'foto-avistamiento':
        imagenes_avistamiento.append(i)
    else:
        if len(imagenes_avistamiento) > 0:
            imagenes.append(imagenes_avistamiento)
            imagenes_avistamiento = []
if len(imagenes_avistamiento) > 0:
    imagenes.append(imagenes_avistamiento)


def validar():
    errores = []
    if region == 0:
        errores.append("Debe elegir una región")

    if comuna == 0:
        errores.append("Debe elegir una comuna")

    if len(sector) > 100:
        errores.append("Nombre del sector demasiado largo")
    if not regex.search(sector_regex, sector) and len(sector) > 0:
        errores.append("Nombre del sector inválido")

    if len(nombre) == 0:
        errores.append("Debe ingresar nombre")
    if len(nombre) > 200:
        errores.append("Nombre demasiado largo")
    if not regex.search(nombre_regex, nombre):
        errores.append("Nombre inválido")

    if len(email) == 0:
        errores.append("Debe ingresar email")
    if len(email) > 100:
        errores.append("Email demasiado largo")
    if not regex.search(email_regex, email):
        errores.append("Email inválido, no cumple formato")

    if len(celular) > 15:
        errores.append("Número de celular demasiado largo")
    if not regex.search(celular_regex, celular) and len(celular) > 0:
        errores.append("Número de celular inválido")

    if type(form["dia-hora-avistamiento"]) == list:
        dias_horas = form["dia-hora-avistamiento"]
        tipos = form["tipo-avistamiento"]
        estados = form["estado-avistamiento"]

        for dia_hora in dias_horas:
            if len(dia_hora.value) == 0:
                errores.append("Debe ingresar día y hora")
            if len(dia_hora.value) > 20:
                errores.append("Día y hora ingresados son demasiado largos")
            if not regex.search(dia_hora_regex, dia_hora.value):
                errores.append("Día y hora no cumple el formato solicitado")

        for tipo in tipos:
            if tipo.value == 0:
                errores.append("Debe elegir un tipo")

        for estado in estados:
            if estado.value == 0:
                errores.append("Debe elegir un estado")

    else:
        dia_hora = form["dia-hora-avistamiento"].value
        tipo = form["tipo-avistamiento"].value
        estado = form["estado-avistamiento"].value

        if len(dia_hora) == 0:
            errores.append("Debe ingresar día y hora")
        if len(dia_hora) > 20:
            errores.append("Día y hora ingresados son demasiado largos")
        if not regex.search(dia_hora_regex, dia_hora):
            errores.append("Día y hora no cumple el formato solicitado")

        if tipo == 0:
            errores.append("Debe elegir un tipo")

        if estado == 0:
            errores.append("Debe elegir un estado")

    for j in range(len(imagenes)):
        for k in range(len(imagenes[j])):
            imagen = imagenes[j][k]
            size = os.stat(imagen.file.fileno()).st_size
            if not imagen.filename:
                errores.append("Archivo no subido")
            if size > MAX_FILE_SIZE:
                errores.append("Tamaño de archivo mayor a 10 MB")

    if len(errores) > 0:
        print_error(errores)
        return False
    return True


if validar():
    if type(form['dia-hora-avistamiento']) == list:
        data = (
            now,
            form['region'].value, form['comuna'].value, form['sector'].value,
            form['nombre'].value, form['email'].value, form['celular'].value,
            form['dia-hora-avistamiento'], form['tipo-avistamiento'], form['estado-avistamiento'],
            imagenes
        )

    else:
        data = (
            now,
            form['region'].value, form['comuna'].value, form['sector'].value,
            form['nombre'].value, form['email'].value, form['celular'].value,
            form['dia-hora-avistamiento'].value, form['tipo-avistamiento'].value, form['estado-avistamiento'].value,
            imagenes
        )

    bbdd.save_info(data)

    html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Recibido!</title>
        <link rel="stylesheet" href="../static/style/informacion-recibida.css">
        <link rel="icon" type="image/png" href="../images/icono.png">
    </head>
    
    <body>
    <header>
        <h1>Hemos recibido su información, muchas gracias por colaborar</h1>
    </header>
    
    <ul>
        <li><a href="portada.py">Volver a la portada</a></li>
    </ul>
    </body>
    </html>
    """
    print(html, file=utf8stdout)
