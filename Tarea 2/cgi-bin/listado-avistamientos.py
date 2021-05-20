#!/usr/bin/python3
# -*- coding: utf-8 -*-
import cgi

from db import Avistamiento

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)

print("Content-type:text/html\r\n\r\n")
db = Avistamiento("localhost", "root", "", "tarea2")
data = db.get_all()
id0 = cgi.FieldStorage().getfirst("id")

if id0 is None:
    id0 = 0
my_id = int(id0)

ultima_pagina = len(data) // 5 if len(data) % 5 != 0 else (len(data) // 5) - 1

if len(data) == 0:
    html = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Listado de avistamientos</title>
    <link rel="stylesheet" href="../static/style/listado-avistamientos.css">
</head>

<body>
<header>
    <h1>Listado de avistamientos</h1>
</header>

<p>No hay avistamientos registrados</p>
<div>
    <ul>
        <li><a href="portada.py">Volver a la portada</a></li>
    </ul>
</div>
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
    <title>Listado de avistamientos</title>
    <link rel="stylesheet" href="../static/style/listado-avistamientos.css">
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
    stop = min(len(data), (my_id * 5) + 5)
    if len(data) <= 5:
        for d in data:
            row = f"""
    <tr>
        <td>{str(d[0])}</td>
        <td>{str(d[1])}</td>
        <td>{str(d[2])}</td>
        <td>{str(d[3])}</td>
    </tr> 
"""
            print(row, file=utf8stdout)
        footer = """
</table>
<div>
    <ul>
        <li><a href="portada.py">Volver a la portada</a></li>
    </ul>
</div>
</body>
</html>
"""
        print(footer, file=utf8stdout)
    elif stop == 5:
        for i in range(0, 5):
            row = f"""
    <tr>
        <td>{str(data[i][0])}</td>
        <td>{str(data[i][1])}</td>
        <td>{str(data[i][2])}</td>
        <td>{str(data[i][3])}</td>
    </tr>
"""
            print(row, file=utf8stdout)
        footer = f"""
</table>
<div>
    <ul>
        <li><a href="portada.py">Volver a la portada</a></li>
    </ul>
</div>

<div class="avances-retrocesos">
    <a href="listado-avistamientos.py?id={my_id + 1}">Siguiente página</a> &nbsp;&nbsp;
    <a href="listado-avistamientos.py?id={ultima_pagina}">Última página</a>
</div>
</body>
</html>
"""
        print(footer, file=utf8stdout)
    elif stop == len(data):
        for i in range(my_id * 5, len(data)):
            row = f"""
    <tr>
        <td>{str(data[i][0])}</td>
        <td>{str(data[i][1])}</td>
        <td>{str(data[i][2])}</td>
        <td>{str(data[i][3])}</td>
    </tr>
"""
            print(row, file=utf8stdout)
        footer = f"""
</table>
<div>
    <ul>
        <li><a href="portada.py">Volver a la portada</a></li>
    </ul> 
</div>

<div class="avances-retrocesos">
    <a href="listado-avistamientos.py?id=0">Primera página</a> &nbsp;&nbsp;
    <a href="listado-avistamientos.py?id={my_id - 1}">Página anterior</a>
</div>
</body>
</html>
"""
        print(footer, file=utf8stdout)
    else:
        for i in range(my_id * 5, stop):
            row = f"""
    <tr>
        <td>{str(data[i][0])}</td>
        <td>{str(data[i][1])}</td>
        <td>{str(data[i][2])}</td>
        <td>{str(data[i][3])}</td>
    </tr>
"""
            print(row, file=utf8stdout)
        footer = f"""
</table>
<div>
    <ul>
        <li><a href="portada.py">Volver a la portada</a></li>
    </ul>
</div>

<div class="avances-retrocesos">
    <a href="listado-avistamientos.py?id=0">Primera página</a> &nbsp;&nbsp;
    <a href="listado-avistamientos.py?id={my_id - 1}">Página anterior</a> &nbsp;&nbsp;
    <a href="listado-avistamientos.py?id={my_id + 1}">Siguiente página</a> &nbsp;&nbsp;
    <a href="listado-avistamientos.py?id={ultima_pagina}">Última página</a>
</div>
</body>
</html>
"""
        print(footer, file=utf8stdout)
