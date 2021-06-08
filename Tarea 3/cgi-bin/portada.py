#!/usr/bin/python3
# -*- coding: utf-8 -*-
from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type: text/html\r\n\r\n")
db = Avistamiento()
data = db.get_last5()

if len(data) == 0:
    html = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Portada</title>
    <link rel="stylesheet" href="../style/portada.css">
    <link rel="icon" type="image/png" href="../images/icono.png">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
</head>

<body onload="mapa()">
<h1>Bienvenido a la mejor página de información de avistamientos del mundo!</h1>
<header>
    <nav>
        <ul>
            <li><a href="../informar-avistamiento.html">Informar avistamiento</a></li>
            <li><a href="listado-avistamientos.py?id=0">Listado de avistamientos</a></li>
            <li><a href="../estadisticas.html">Estadísticas</a></li>
        </ul>
    </nav>
</header>

<body>
<p>No hay avistamientos registrados :c</p>
<div id="mapa"></div>
<script src="../scripts/mapa.js"></script>
</body>
</html>
"""
    print(html, file=utf8stdout)
else:
    static = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Portada</title>
    <link rel="stylesheet" href="../style/portada.css">
    <link rel="icon" type="image/png" href="../images/icono.png">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
</head>

<body onload="mapa()">
<h1>Bienvenido a la mejor página de información de avistamientos del mundo!</h1>
<header>
    <nav>
        <ul>
            <li><a href="../informar-avistamiento.html">Informar avistamiento</a></li>
            <li><a href="listado-avistamientos.py?id=0">Listado de avistamientos</a></li>
            <li><a href="../estadisticas.html">Estadísticas</a></li>
        </ul>
    </nav>
</header>

<h3>Últimos 5 avistamientos informados:</h3>
<div class="tabla">
    <table>
        <tr>
            <th>Fecha - Hora</th>
            <th>Comuna</th>
            <th>Sector</th>
            <th>Tipo</th>
            <th>Foto</th>
        </tr>
"""

    print(static, file=utf8stdout)

    for d in data:
        row = f"""
        <tr>
            <td>{str(d[0])}</td>
            <td>{str(d[1])}</td>
            <td>{str(d[2])}</td>
            <td>{str(d[3])}</td>
            <td><img src="../media/{str(d[4])}" alt="Imagen de un {str(d[3])}"></td>
        </tr>
"""
        print(row, file=utf8stdout)

    end = """
    </table>
</div>
<div id="mapa"></div>
<script src="../scripts/mapa.js"></script>
</body>
</html>
"""
    print(end, file=utf8stdout)
