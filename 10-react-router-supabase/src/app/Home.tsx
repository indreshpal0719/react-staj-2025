import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from "./supabase";

export type User = {
  id: string;
  name: string;
};

const Home = () => {
  // usss
  const [users, setUsers] = useState<User[]>([]);

  // uffs
  useEffect(() => {
    supabase
      .from("USERS")
      .select()
      .order("id", { ascending: false })
      .then((res) => setUsers(res.data as User[]));
  }, []);

  return (
    <ul>
      {users?.map((user) => (
        <li>
          <Link to={"/users/" + user.id}>
            {user.id} {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
