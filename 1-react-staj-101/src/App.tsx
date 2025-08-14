// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [yas, setYas] = useState(42);
  const [cinsiyet, setCinsiyet] = useState("erkek");
  const [sonuc, setSonuc] = useState(0);

  return (
    <>
      <h1>Ne zaman öleceksin testi</h1>
      <button
        onClick={() => {
          if (cinsiyet === "erkek") {
            setSonuc(75 - yas);
          } else {
            setSonuc(80 - yas);
          }
        }}
      >
        Hesapla
      </button>
      <h1>Yaş: {yas}</h1>
      <h1>Cinsiyet: {cinsiyet}</h1>
      <h1>Sonuç: {sonuc} yıl zamanın kaldı hemen React öğren.</h1>
    </>
  );
};

export default App;
