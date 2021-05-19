#!/usr/bin/python3
# -*- coding: utf-8 -*-
import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
)

cursor = db.cursor()

tarea2 = open("../tarea2.sql", "r")
region_comuna = open("../region-comuna.sql", "r")
cursor.execute(tarea2.read(), multi=True).send(None)
cursor.execute(region_comuna.read(), multi=True).send(None)

print("Tablas creadas!")
