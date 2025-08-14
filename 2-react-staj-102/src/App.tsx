// rafce

import { useEffect, useState } from "react";

const App = () => {
  // usss
  const [turler, setTurler] = useState([]);

  // uffs
  useEffect(() => {
    fetch("https://swapi.info/api/species")
      .then((res) => res.json())
      .then((turler) => setTurler(turler));
  }, []);

  return (
    <ul>
      {!turler.length && <h1>Yükleniyor...</h1>}
      {turler.map((tur) => (
        <li>{tur.name}</li>
      ))}
    </ul>
  );
};

export default App;
