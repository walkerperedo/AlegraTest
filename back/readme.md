Este proyecto se encuentra desarrollado en una arquitectura de microservicios usando principalmente Nodejs, Docker, Ngnix
Este proyecto ya tiene todo configurado lo unico que tienes que hacer es pararte en esta carpeta en la terminal y correr los comandos
    1.- "docker-compose build"
    2.- "docker-compose up"

Info del proyecto
Al correr los comandos crearas contenedores para los diferentes servicios, cada contenedor lo expongo en diferentes puertos.
Igual creara un reverse-proxy con ngnix que nos ayudara a redirigir las peticiones a cada microservicio respectivamente.