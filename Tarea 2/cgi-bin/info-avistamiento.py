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
info = bbdd.get_info_avistamiento(id_avistamiento)
cantidad_avistamientos = bbdd.count_avistamientos(id_avistamiento)
imagen = bbdd.get_info_imagen(id_avistamiento)
imagenes_por_avistamientos = bbdd.count_imagenes_por_avistamiento(id_avistamiento)

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
        Región: {str(info[0][0])}<br>
        Comuna: {str(info[0][1])}<br>
        Sector: {str(info[0][2])}
    </div>
    <div class="datos-contacto"><b><u>Datos de contacto</u></b><br>
        Nombre: {str(info[0][3])}<br>
        Email: {str(info[0][4])}<br>
        Número de celular: {str(info[0][5])}
    </div>
"""
print(static, file=utf8stdout)

imagen_actual = 0
for i in range(cantidad_avistamientos):
    informacion = f"""
    <div class="info-avistamiento"><b><u>Información de avistamiento</u></b><br>
        Día y hora: {str(info[i][6])}<br>
        Tipo: {str(info[i][7])}<br>
        Estado: {str(info[i][8])}
    </div>
    """
    print(informacion, file=utf8stdout)
    for j in range(imagenes_por_avistamientos[i][0]):
        imagenes = f"""
            <a href="#"><img src="../media/{str(imagen[imagen_actual][0])}" alt="Imagen de un {info[i][7]}"></a>
        """
        imagen_actual += 1
        print(imagenes, file=utf8stdout)

footer = """
</div>

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
