// import React, { useState, useEffect } from 'react';
// import './styles.scss';

// function SoundWindow() {

//   //cricketsSounds,
//   //const [data, setDatos] = useState([]);
//   const [data, setDatos] = useState([]);
//   // const [cricketsSounds, setCrickets] = useState([]);
//   const [text, setText] = useState('Initial text');

//   function handleClick(data) {
//     setText(data);
//   }

//   useEffect(() => {
//     fetch('/datos')
//       .then(response => response.json())
//       .then(data => setDatos(data))
//       .catch(error => console.error(error));

//     }, []);
    
//   return (
//   <div className = "background">
//     <div className = "main">
//       <div className = "fatherContainer">
//         <div className = "Title">
//           <h1>Working on...</h1>
//         </div>
//         <div className = "ThemeWindow">
//           <div className="container">
//             <div className = "Options">
//               <button className="buttonToDo" 
//                 onClick={() => {
//                     console.log("Datos: ", data);
//                   }}
//               >+</button>
//             </div>
//               <br/>
//               <p>Output: {text}</p>
//           </div>  
//         </div>         
//       </div>


//       <div className = "fatherContainer2">
//         <div className = "Title">
//           <h1>Ambience sounds</h1>
//         </div>
//         <div className = "ThemeWindow2">
//           <div className="container">
//             <div className = "Options">
//               <button className="button"
//                 onClick={() => {
//                     console.log("Datos: ", data);
//                   }}
//               >Theme</button>
//               <button className="button"
//                 onClick={() => {
//                     console.log("Datos: ", data);
//                   }}
//               >Playlist</button>
//             </div>
//             <button className="button"
//               onClick={() => {
//                   console.log("Datos: ", data);
//                 }}
//             >Forest</button>
//             <button className="button"
//               onClick={() => {
//                   console.log("Datos: ", data);
//                 }}
//             >Sea</button>
//             <button className="button"
//               onClick={() => {
//                   console.log("Datos: ", data);
//                 }}
//             >Library</button>
//             <button className="button"
//               onClick={() => {
//                   console.log("Datos: ", data);
//                 }}
//             >Coffee Shop</button>


//           </div>
//           <div className = "volume">
//             <div className = "col">
//               <button className="sound"onClick={() => {
//                       console.log("Volumen: ");
//                     }}
//               >V</button>
//               <button className="buttonSound"
//                   onClick={() => {
//                       console.log("Crickets sound: ", data[3]);
//                       handleClick(data[3].sound_name);
//                       // console.log("Output: ", output);
//                     }}
//               >Crickets</button>
//               <button className="play"onClick={() => {
//                       console.log("Play: ");
//                     }}
//               >II</button>
//               <button className="sound"onClick={() => {
//                       console.log("Volumen: ");
//                     }}
//               >V</button>
//               <button className="buttonSound"
//                   onClick={() => {
//                       console.log("Leaves sound: ", data[1]);
//                       handleClick(data[1].sound_name);
//                     }}
//               >Leaves</button>
//               <button className="play"onClick={() => {
//                       console.log("Play: ");
//                     }}
//               >II</button>
//             </div>
//             <div className = "col">
//               <button className="sound"onClick={() => {
//                       console.log("Volumen: ");
//                     }}
//               >V</button>
//               <button className="buttonSound"
//                   onClick={() => {
//                       console.log("Birds sound: ", data[0]);
//                       handleClick(data[0].sound_name);
//                     }}
//               >Birds</button>
//               <button className="play"onClick={() => {
//                       console.log("Play: ");
//                     }}
//               >II</button>
//               <button className="sound"onClick={() => {
//                       console.log("Volumen: ");
//                     }}
//               >V</button>
//               <button className="buttonSound"
//                   onClick={() => {
//                       console.log("River sound: ", data[5]);
//                       handleClick(data[5].sound_name);
//                     }}
//               >River</button>
//               <button className="play"onClick={() => {
//                       console.log("Play: ");
//                     }}
//               >II</button>
//             </div>
//             <div className = "col">
//               <button className="sound"onClick={() => {
//                       console.log("Volumen: ");
//                     }}
//               >V</button>
//               <button className="buttonSound"
//                   onClick={() => {
//                       console.log("Wind sound: ", data[4]);
//                       handleClick(data[4].sound_name);
//                     }}
//               >Wind</button>
//               <button className="play"onClick={() => {
//                       console.log("Play: ");
//                     }}
//               >II</button>
//               <button className="sound"onClick={() => {
//                       console.log("Volumen: ");
//                     }}
//               >V</button>
//               <button className="buttonSound"
//                   onClick={() => {
//                       console.log("Datos: ", data[2]);
//                       handleClick(data[2].sound_name);
//                     }}
//               >Rain</button>
//               <button className="play"onClick={() => {
//                       console.log("Play: ");
//                     }}
//               >II</button>
//             </div>
//               <br/>
//               <p>Output: {text}</p>
//           </div>  
//         </div>         
//       </div>
//     </div>
//   </div>
//   );
// }

// export default SoundWindow;

// // fetch('/getCrickets')
// //   .then(response => response.json())
// //   .then(cricketsSounds => console.log(cricketsSounds))
// //   .catch(error => console.error(error));

// // {/* <Button
// // className="button"
// // variant="outlined"
// // color="primary"
// // onClick={() => {
// //     // Acción a realizar al hacer clic en el botón
// // }}
// // >
// // {/* <PlayArrowIcon /> */}
// // {/* </Button> */} 