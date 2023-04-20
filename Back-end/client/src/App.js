 import './App.css';
 import React from "react";
 import Header from './Components/Header';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/sounds")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const sounds = Object.values(data);
        setData(sounds);
      })
      .catch((error) => {
        console.error(error);
        setData([]);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  function SoundRow({ sound }) {
    return (
      <tr>
        <td>{sound.name}</td>
        <td>{sound.sound}</td>
      </tr>
    );
  }
  function SoundTable({ sounds }) {
    const rows = [];
    let lastCategory = null;
  
    if (sounds !== null) { // Add this check to prevent the error
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
    }
    
  
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
  
  function SoundCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
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
        <SearchBar />
        <SoundTable sounds={sounds} />
      </div>
    );
  }

  return (
    <div className="App">
      <Header/>
      <FilterableSoundTable sounds={data} />
    </div>
  );
}

export default App;
