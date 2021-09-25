# Back Office Ubademy

Página web de Ubademy, que servira para administrar los servicios disponibles y visualizarlos. Aca va banda de información de lo que se usa esta bastante resumido, despues podriamos ampliar un poco más.

# 1. Instalaciones necesarias

## 1.1 NodeJS

### 1.1.1 ¿Para que sirve?

Sirve para generar/buildear/correr el proyecto en general, pero tambien sirve para convertir con comandos imagenes a .svg actualizandote el manifest.json y el index.html.
De todos modos en 2.1 hay otra opcion que tambien recomiendo.

### 1.1.2 Descarga/Instalación

- Se descarga de https://nodejs.org/es/ --> descargar la recomendada.
- Instalar del .exe y seguir los pasos.
- Para chequear que se instaló correctamente correr en la terminal:
  > npm -v // debería salirles la versión que instalaron

# 2. Instalaciones Recomendadas

## 2.1 Yarn

Es practicamente parecido a NodeJs, de hecho dejo los comandos en el apartado 3

- Descarga desde la terminal poniendo la linea:
  > npm install -g yarn
  > yarn -v // para ver que se instaló bien

## 2.2 Visual Studio Code

Yo lo uso para levantar web porque podes agarrar varios plugins que te deja meterle y te ayudan mucho para codear.

### 2.2.1 Plugins

La idea es que si usan este IDE metan estos plugins y para descargarlos a la izquierda el 5to simbolito es el de plugins (como unos cuadraditos), dejo una imagen:

![image](https://user-images.githubusercontent.com/44707059/134754384-6da0db39-95bb-43b3-8dd4-1868e446530b.png)

#### 2.2.1.1 Spanish Language Pack for Visual Studio Code

Ya el nombre lo indica pero tengo entendido que les va a venir en inglés, asi que si les pinta pongan ese plugin y reinicien el IDE.

#### 2.2.1.2 ES7 React/Redux/GraphQL/React-Native snippets

Hay varios snippets para los lenguajes de React/Redux/GraphQL/React-Native que te crean codigo base y la verdad que ayuda mucho.
Tambien te van tirando tipo ayudas cuando vas codeando, te importa los componentes si los encuentra.

#### 2.2.1.3 Prettier - Code formatter

Sirve para reformatear el codigo segun el tipo de lenguaje que se usa, esto lo podes configurar para que lo haga cada vez que guardas (que diria que lo hagan), porque te despreocupas de que quede bien formateado ya que lo hace solo.

Para setearlo tienen que ir a Archivo > Preferencias > Configuración y en el buscador ponen "format", y uno de las configuraciones que les sale se llama "Editor: Format On Save" , le tildan esta opcion y listo.

Si cuando guardan un archivo no se les formatea hagan "click derecho" > "Dar formato al documento con" > "Configurar el formateador predeterminado" y ahi seleccionan Prettier, y ahora si les deberia reformatear el codigo cada vez que guarden un archivo.

#### 2.2.1.4 HTML CSS Support

Practicamente es la misma idea que el de React (2.2.1.2) y demás, te va dando ayudas tanto de codigo base como de darte ayudas en estos dos lenguajes, tambien ayuda banda.

#### 2.2.1.5 vscode-styled-components

Este sirve para una libreria en particular que se usa (styled-components) y es de la misma onda que el de HTML/CSS que mostré en el 2.2.1.4, este es solo para ayudas de las propertys de CSS, te va tirando valores y nombres de las mismas.

Basicamente la libreria es que podes crear componentes con style de CSS , donde le decis que un componente será del tipo "X" (con X siendo algo de HTML o componentes de REACT; ej: div, h1, p, a, button, etc...).

# 3. Librerias

En este apartado presentamos las librerias que se usan en este proyecto.

# 3.1 styled-components

## 3.1.1 Resumen con ejemplo

Un poco ya lo conté antes y es tal cual lo explique. Creas componentes de react con style de CSS diciendole el tipo de HTML que es o que componente es, un ejemplo sería:
** HTML **
export const ImgLogo = styled.img` margin-right: 0.5rem; height: 40px; width: 40px; `;

        ** REACT **
        export const NavBtnLink = styled(Link)`
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          padding: 8px 16px;
          height: 100%;
          width: 100%;
          border: none;
          outline: none;
        `;

Entonces el componente de React es ImgLogo y es un img de HTML. Luego dentro de `` se le puede poner propertys tipicas de CSS. Lo mismo sucede con NavBtnLink que es de tipo Link con ciertos estilos de CSS.

## 3.1.2 Leer más

Para más info en https://styled-components.com/

# 3.2 react-router-dom

## 3.2.1 Resumen

Esta libreria sirve para los links que usaremos, osea para redirigir la pagina a ciertas partes que querramos y estos podes asociarlos a componentes creados.

## 3.2.2 Leer más

Para ver que componentes trae vayan https://www.npmjs.com/package/react-router-dom o https://www.npmjs.com/package/react-router-dom, o busquen esta libreria en internet que hay banda de ejemplos y de como usarlo.

# 3.3 react-icons

## 3.3.1 Resumen

Esta libreria tiene todos los iconos que se les ocurran, asi que good.

## 3.3.2 Leer más

Si quieren ver todos los iconos que hay (además te dice como importarlos) en https://react-icons.github.io/react-icons/ está todo.

# 3.4 Material-UI

## 3.4.1 Resumen

Si bien se puede usar esta porque te viene con muchos componentes ya creados y que además utiliza conceptos de Material-Design, esta no la usamos a nivel codigo sino más bien para ver como orientarnos con los estilos que le pongamos a los componentes que hacemos.

# 3.4.2 Leer más

Está muy buena toda la documentación y ejemplos tanto visuales como codigo de los mismos (si no hay codigo le metemos un inspect para ver con mas detalle). Además tiene de lo que se les ocurra, mas que nada de guia pero seguro la terminemos usando para algo en especial que de fiaca usar y esto lo traiga ya armado.

La pagina es https://next.material-ui.com/

# 4. Comandos para el proyecto

# 4.1 Comandos utilizados

# 4.1.1 Creacion de la app

- 1er template
  > npx/yarn create-react-app my-app: Te crea un template base con lo justo y necesario para levantarla rapido
- 2do template
  > npx create-react-app my-app --template [template-name]: lo mismo que antes pero le podes decir que template queres usar:
  > . typescript: crea una app con ese tipo
  > . --use-npm: te hace que en vez de usar yarn para los scripts te ponga npm
  > . cra-template-pwa: esto te crea un app de PWA, basicamente que podes descargarte la APP de la web y dejarla en la maquina. Si pones esto te sale un iconito arriba a la derecha (una pc con una flecha para abajo) y te deja instalarla.
  Estos te tiran mas cosas respecto del 1ero, es bastante mas completo, de hecho yo use el 1ero y ahora me falta el Service Worker, que los del 2do caso me lo train ya prearmado, lo cual ahora tengo que configurarlo. No se que sucede si mando alguno de esos comandos (ej: cra-template-pwa; que puede estar bueno porque tambien podes hacerlo en el celu y te queda la app), esperemos que no me borre lo que tengo y solo me los añada o al menos eso espero que haga.

# 4.1.2 Buildear la app

> cd my-app
> yarn build

Te buildea la app basicamente, puede servir para en vez de mostrar todos los elementos de la web te muestre solo los que genera el build (porque genera una carpeta con todos lo que necesita).

# 4.1.3 Correr la app

Si queremos levantar la app, podemos hacer lo siguiente

> cd my-app
> yarn start

Te abre directo el localhost:3000 para esta version, mas adelante deberia abrir heroku.

** Generados por el propio yarn cuando cree el proyecto **
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 4.2 Available Scripts

In the project directory, you can run:

### 4.2.1 `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 4.2.2 `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 4.2.3 `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 4.2.4 `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 4.3 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### 4.3.1 Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 4.3.2 Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### 4.3.3 Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 4.3.4 Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### 4.3.5 Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### 4.3.6 `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
