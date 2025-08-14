// rafce

import { useEffect, useState } from "react";
import { Link } from "react-router";

export type User = {
  id: string;
  name: string;
};

const Users = () => {
  // usss
  const [users, setUsers] = useState<User[]>([]);

  // uffs
  useEffect(() => {
    const API_URL = "http://localhost:3001";

    fetch(API_URL + "/users", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <li>
          <Link to={"/users/" + user.id}>
            {user.id}: {user.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Users;
