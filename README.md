# YSBRYD-GamePublisher-PageMockup
YSBRYD GAMES Page Mockup
#### Original page link:  
https://www.ysbryd.net  
# Tecnologias utilizadas  
## React   
La biblioteca de Javascript para el desarrollo de aplicaciones de una sola pagina por excelencia, durante este proyecto se utilizo para la creación de los diferentes componentes utilizados en el desarrollo de la pagina, la pagina se dividio en diferentes secciones como la pagina de información ([About](https://github.com/andresdlRoca/Proyecto1-STW-UVG/blob/main/src/components/About.jsx)), la pagina de inicio ([Frontpage](https://github.com/andresdlRoca/Proyecto1-STW-UVG/blob/main/src/components/Frontpage.jsx)), la pagina de portafolio ([Portfolio](https://github.com/andresdlRoca/Proyecto1-STW-UVG/blob/main/src/components/Portfolio.jsx)), entre otras.  
## Babel  
Se aplico tambien este "compilador" de codigo de JavaScript para permitir la utilización de funciones novedosas dentro del mismo lenguaje de JavaScript y que estas sean compatibles con navegadores no tan actualizados.  
## Webpack   
Tambien se utilizó este empaquetador de archivos para reducir no solo el tamaño del archivo final sino que tambien para reducir el consumo de recursos, ya que todo el codigo que se utiliza se pone en archivos unicos correspondientes al lenguaje utilizado (HTML, CSS o JS).  
## ESLint  
Se utilizó ademas la herramienta de linting, ESLint con el reglamento de [AirBnb](https://www.npmjs.com/package/eslint-config-airbnb), esto con el objetivo de limpiar el codigo, haciendolo mas legible y con menos posibilidad de que ocurran "bugs".  
## Sass/Scss 
El preprocesador de archivos CSS tambien fue utilizado, mas concretamente con su extension .scss, con el objetivo de reducir el tiempo de creación de los diferentes archivos CSS, facilitar el mantenimiento a futuro y tener una organización modular que nos permite anidar clases y demas atributos debido a la sintaxis que nos permite este preprocesador.  
## Nginx  
 Por ultimo, para lograr subir la pagina web a la instancia de AWS de la clase se utilizo este servidor web que nos permite subir a un puerto especifico dentro de la instancia y visualizar el contenido subido.  
## Ejecución de aplicacion react
En terminal:
```
npm run start
```
