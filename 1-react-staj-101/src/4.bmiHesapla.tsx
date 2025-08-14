// rafce

import { useState } from "react";

const App = () => {
  // kg/m2
  // usss
  const [kg, setKg] = useState(120);
  const [boy, setBoy] = useState(1.73);
  const [bmi, setBmi] = useState(0);
  const [sonuc, setSonuc] = useState("");

  return (
    <>
      <button
        onClick={() => {
          const bmi = kg / (boy * boy);
          setBmi(bmi);
          if (bmi < 18.5) {
            setSonuc("Zayıf");
          } else if (bmi < 24.9) {
            setSonuc("Normal insan");
          } else if (bmi < 29.9) {
            setSonuc("Fazla kilolu");
          } else if (bmi < 34.9) {
            setSonuc("1. derecede obezite");
          } else if (bmi < 39.9) {
            setSonuc("2. derecede obezite");
          } else {
            setSonuc("3. derecede obezite");
          }
        }}
      >
        BMI hesapla
      </button>
      <h1>Boy: {boy}</h1>
      <h1>Kilo: {kg}</h1>
      <h1>BMI: {bmi}</h1>
      <h1>Sonuç: {sonuc}</h1>
    </>
  );
};

export default App;
