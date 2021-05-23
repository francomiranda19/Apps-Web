#!/usr/bin/python3
# -*- coding: utf-8 -*-

utf8stdout = open(1, "w", encoding="utf-8", closefd=False)


def print_error(errores):
    static = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Error</title>
    <link rel="stylesheet" href="../static/style/informacion-recibida.css">
</head>

<body>
<header>
"""
    print(static, file=utf8stdout)
    for error in errores:
        html = f"""
    <p>{error}<br></p>
"""
        print(html, file=utf8stdout)
    footer = """
</header>

<button onclick="window.history.back()">Volver al formulario</button>
</body>
</html>
    """
    print(footer, file=utf8stdout)
