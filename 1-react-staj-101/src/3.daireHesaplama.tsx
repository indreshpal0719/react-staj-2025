// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [yaricap, setYaricap] = useState(42);
  const [alan, setAlan] = useState(0);
  const [cevre, setCevre] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setAlan(3 * yaricap * yaricap);
          setCevre(2 * 3 * yaricap);
        }}
      >
        Daire alanı hesapla
      </button>
      <h1>Yarıçap: {yaricap}</h1>
      <h1>Alan: {alan}</h1>
      <h1>Çevre: {cevre}</h1>
    </>
  );
};

export default App;
