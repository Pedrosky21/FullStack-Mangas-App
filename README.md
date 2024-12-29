# FullStack-Mangas-App
Aplicación Fullstack de mangas
La aplicación de mangas permite gestionar una colección de mangas mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Backend
Se realizó con NodeJs y la librería Express.
La Base de Datos está hecha en SQLite.

### Arquitectura del servidor
![Arquitectura Servidor](https://github.com/user-attachments/assets/31c1a931-0dba-44bc-b733-d39781ef5a47)


Controllers: Se ubican las funciones a ejecutar según cada ruta.
Models: Definición de los ORM.
Providers: Servicio de conexión con la BBDD.
Public: Imágenes.
Routes: Definición de rutas para cada endpoint.


## Frontend
Se realizó con Angular, utilizando formularios reactivos y Angular Material para las operaciones CRUD.
Los estilos se dieron con Bootstrap.

### Arquitectura Angular
