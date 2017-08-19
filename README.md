# Taller de desarrollo de proyectos 2 - Server

Servidor que implementa microservicios 


## Tutos

Es conveniente ver este video antes, es el tutorial en el que se basó la implementación:

https://www.youtube.com/playlist?list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ

## Como instalarlo

Instalar Node JS (también se instalará NPM):
https://nodejs.org/es/

Instalar mongodb:
https://www.mongodb.com/download-center?jmp=nav#community


Una vez instalado, ejecutar desde el directorio raiz:

> $ npm install

Esto instala las dependencias del proyecto (bibliotecas externas definidas en el package.json).

## Cómo levantar el servidor

### Levantar el motor de Base de Datos primero:

> $ sudo mongod

Si da este error:
exception in initAndListen: 29 Data directory /data/db not found., terminating

Ejecutar como root:
> $ mkdir -p /data/db

### Levantar el servidor:

Para correr el servidor:

> $ npm start

### Correr las pruebas:

> $ npm test

# API publica

## Status
Tipo y URI

GET /users
Mensaje:

    body: {}

Respuesta:

	respuesta --> 200 Y 
	body: {
		status: "ok"
	}