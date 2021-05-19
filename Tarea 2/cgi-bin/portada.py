#!/usr/bin/python3
# -*- coding: utf-8 -*-
from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type:text/html; charset=UTF-8")
db = Avistamiento("localhost", "root", "", "tarea2")
data = db.get_last5()

static = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Portada</title>
    <link rel="stylesheet" href="../static/style/portada.css">
</head>

<body>
<h1>Bienvenido a la mejor página de información de avistamientos del mundo!</h1>
<header>
    <nav>
        <ul>
            <li><a href="../informar-avistamiento.html">Informar avistamiento</a></li>
            <li><a href="../listado-avistamientos.html">Listado de avistamientos</a></li>
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
            <td><img src="../media/{str(d[4])}"></td>
        </tr>
    """
    print(row, file=utf8stdout)

end = """
    </table>
</div>
</body>
</html>
"""
print(end, file=utf8stdout)
