# Mini-Reto-2
Web App - Mini Reto: Study Vibes

## Descripción
Esta es una pagina web de concentración, tiene el objetivo de permitir que sus usuarios generen un ambiente sonoro agradable para sus sesiones de estudio y/o trabajo. Cuenta también con una todo list. 

## Cómo utilizar la página web

## Deployment:


## Tecnologías 
- Frontend: React
- API: Express
- Base de datos: MySQL
- Hosting de la página web: Vercel
- Hosting de la base de datos: PlanetScale
- Frameworks de CSS: Sass

## API
Nuestra Web APP hace uso de dos apis, una a nivel interno para manejar principalmente las configuraciones de los sonidos y hace uso externamente de la API de Freesound, mediante la cual podemos acceder y obtener los sonidos presentes en la página. 
Nuestra API interna se conecta a nuestra base de datos y maneja la información de las temáticas de las playlists, las configuracionnes generadas y la información de nuestros sonidos. Esta API responde a las preguntas de cómo agregar, eliminar y actualizar las configuraciones de las playlist de sonidos en la base de datos y cómo obtener información sobre las mismas playlists o temáticas.

Los usuarios de nuestra API serían los desarrolladores de la página web que la utilizan para administrar la base de datos de las configuraciones de sonidos.

La documentación de la API interna fue generada con Swagger, se encuentra en el archivo `SwaggerAPI.yaml` y se puede ver como pdf,  para su facil visualización, en el archivo `APISwagger.pdf`. La carpeta client contiene la app en react que se encarga de manejar la interfaz de usuario, esta se conecta a la API en el index.js. 

##Diagrama de Componentes

#Futuras Funciones


## Autores
- [Mariana Esquivel Hernández](https://github.com/Mariana-code)
  - [Mariana Bustos Hernández](https://github.com/Mar-bh)

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)

