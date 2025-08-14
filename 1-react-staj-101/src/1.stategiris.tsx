import { useState } from "react";
// rafce
const App = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  return (
    <>
      <h1>Sayı: {sayi}</h1>
      <button onClick={() => setSayi(sayi + 1)}>Arttır</button>
      <button onClick={() => setSayi(sayi - 1)}>Azalt</button>
    </>
  );
};

export default App;
