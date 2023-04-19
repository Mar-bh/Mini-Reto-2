
 import './App.css';
 import React from "react";
 import Header from './Components/Header';


function App() {
   const [data, setData] = React.useState(null);

   React.useEffect(() => {
     fetch("/api/sounds")
      .then((res) => res.json())
      .then((data) => setData(data.message));
   }, []);

   function SoundCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
  
  function SoundRow({ sound }) {
    return (
      <tr>
        <td>{sound.name}</td>
        <td>{sound.source}</td>
      </tr>
    );
  }
  
  function SoundTable({ sounds }) {
    const rows = [];
    let lastCategory = null;
  
    sounds.forEach((sound) => {
      if (sound.category !== lastCategory) {
        rows.push(
          <SoundCategoryRow
            category={sound.category}
            key={sound.category} />
        );
      }
      rows.push(
        <SoundRow
          sound={sound}
          key={sound.name} />
      );
      lastCategory = sound.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  
  function SearchBar() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
  
  function FilterableSoundTable({ sounds }) {
    return (
      <div>
        <SearchBar/>
        <SoundTable sounds={sounds} />
      </div>
    );
  }

  const SOUNDS = [{category:"forest", source:"Youtube", name: "rain"}, 
  {category:"forest", source:"Youtube", name: "rain2"}];
  
   return (
     <div className="App">
        <Header/>
        <p>
           {!data ? "Hellooooooo...": data}
        </p>
        <FilterableSoundTable sounds={SOUNDS} />
     </div>
   );
}

export default App;
