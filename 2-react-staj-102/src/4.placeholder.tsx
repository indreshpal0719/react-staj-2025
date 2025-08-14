import { useEffect, useState } from "react";

// rafce
const App = () => {
  // usss
  const [users, setUsers] = useState([]);

  // uffs
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((kullanicilar) => setUsers(kullanicilar));
  }, []);

  return (
    <>
      {!users.length && <h1>Loading</h1>}
      {users.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </>
  );
};

export default App;
