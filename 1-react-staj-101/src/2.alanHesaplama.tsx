// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [kenar, setKenar] = useState(4);
  const [alan, setAlan] = useState(0);
  return (
    <>
      <button onClick={() => setAlan(kenar * kenar)}>
        Kare alan hesapla
      </button>
      <h1>Kenar: {kenar}</h1>
      <h1>Alan: {alan}</h1>
    </>
  );
};

export default App;
