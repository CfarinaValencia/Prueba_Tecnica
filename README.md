Sistema de Monitoreo de Actividades Agronómicas
# Defina el alcance de su solución
El objetivo de esta solución es proporcionar a los campesinos una herramienta digital que les permita monitorear y gestionar sus actividades agronómicas diarias. Este sistema permite el registro detallado de actividades como siembra, riego, fertilización, y cosecha, facilitando la toma de decisiones informadas basadas en datos históricos y actuales. La solución incluye un frontend desarrollado en React y un backend en Node.js con Express, utilizando MongoDB como base de datos y Docker para la portabilidad.

Lista de requerimientos debidamente clasificados
# Funcionales
Registro de Actividades Agronómicas: Permitir a los usuarios registrar actividades con detalles como fecha, tipo de actividad, insumos utilizados, y duración.
Gestión de Parcelas: Permitir a los usuarios gestionar información de las parcelas, incluyendo ubicación, tamaño, y tipo de cultivo.
Visualización de Datos: Proveer interfaces gráficas para visualizar y analizar las actividades registradas.
Interacción CRUD: Funcionalidad completa de creación, lectura, actualización y eliminación (CRUD) para actividades y parcelas.
# No Funcionales
Desplegabilidad: La aplicación debe ser fácilmente desplegable usando Docker.
Escalabilidad: El sistema debe poder manejar un número creciente de usuarios y datos.
Seguridad: Implementar medidas básicas de seguridad en la aplicación, como la validación de entradas.
Arquitectura de software de la solución propuesta
La arquitectura propuesta sigue una estructura de aplicación web moderna, dividida en frontend, backend y base de datos:

Frontend: Desarrollado con React, proporciona una interfaz de usuario interactiva y amigable.
Backend: Construido con Node.js y Express, maneja las solicitudes del frontend y se comunica con la base de datos.
Base de Datos: MongoDB, una base de datos NoSQL que almacena los registros de actividades y parcelas.
Docker: Utilizado para contenerizar la aplicación, asegurando que se pueda desplegar fácilmente en cualquier entorno.
# Modelo de la base de datos
Se utiliza MongoDB como base de datos NoSQL.
# Sistema de información que ayude a la solución
El sistema de información desarrollado incluye las siguientes componentes:

Interfaz de Usuario: Una aplicación web React que permite a los usuarios interactuar con el sistema de forma intuitiva.
API RESTful: Un backend en Node.js con Express que expone endpoints para interactuar con la base de datos.
Base de Datos: MongoDB para almacenar y gestionar la información de actividades y parcelas.
Docker: Archivos de configuración Docker para contenerizar y desplegar fácilmente tanto el frontend como el backend.
