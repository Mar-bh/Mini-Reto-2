// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import LandingPage from "./Views/LandingPage";

// function App() {
//   const [data, setData] = React.useState(null);

//   // use effects son funciones que nos da React para poder manipular el flujo de React
//   // en este caso, nos especifica que ocurrira algo asincrono
//   // se utilizara una funcion de callback para recibir una funcion que se puede ejecutar en nuestro query
//   // el callback va a hacer fetch a la ruta /api/sound
//   // fetch es una funcion que nos da el navegador para hacer peticiones a un servidor
//   // then es una funcion que se ejecuta cuando la peticion se resuelve y nos da un objeto de respuesta
//   // el objeto de respuesta tiene una funcion json que nos da el cuerpo de la respuesta
//   // el cuerpo de la respuesta es un objeto con una propiedad message
//   // despues de tomar el reponse de fecth, lo convertimos a json y lo guardamos en el estado de data
//   // una vez guardado en data, se va a volver a renderizar el componente
//   React.useEffect(() => {
//     // fetch("/api/sound")
//     fetch("/api/hello")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           {!data ? "Hellooooooo...": data}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Header from './Components/Header';

function App() {
  return(
    <Header/>
  )
}

export default App;