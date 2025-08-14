// rafce

const App = () => {
  const insan = {
    ad: "Zafer",
    yas: 34,
    cinsiyet: "Erkek",
  };
  return (
    <div>
      <li>Ad: {insan.ad}</li>
      <li>Yaş: {insan.yas}</li>
      <li>Cinsiyet: {insan.cinsiyet}</li>
    </div>
  );
};

export default App;
