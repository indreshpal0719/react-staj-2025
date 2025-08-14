// rafce

const App = () => {
  const insanlar = [
    {
      ad: "Zafer",
      yas: 34,
      cinsiyet: "Erkek",
    },
    {
      ad: "Gökay",
      yas: 21,
      cinsiyet: "Erkek",
    },
  ];
  return (
    <div>
      {insanlar.map((insan) => (
        <li>
          {insan.ad} {insan.yas}
        </li>
      ))}
    </div>
  );
};

export default App;
