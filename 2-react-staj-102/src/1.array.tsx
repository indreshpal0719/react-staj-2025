// rafce

const App = () => {
  const isimler = ["Fatih", "Mehmet", "Tuğçe"];

  return (
    <ul>
      {isimler.map((isim) => (
        <li>{isim}</li>
      ))}
    </ul>
  );
};

export default App;
