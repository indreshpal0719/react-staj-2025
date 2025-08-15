import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { User } from "./Home";
import { supabase } from "./supabase";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // usss
  const [user, setUser] = useState<User>();

  // uffs
  useEffect(() => {
    supabase
      .from("USERS")
      .select()
      .eq("id", id)
      .single()
      .then((res) => setUser(res.data as User));
  }, []);

  const handleDelete = () => {
    const isDelete = confirm(user?.name + " silinsin mi?");
    if (!isDelete) {
      return;
    }
    supabase
      .from("USERS")
      .delete()
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          alert("Bir hata oluştu: " + error);
          console.log(error);
        } else {
          alert(user?.name + " silindi");
          navigate("/");
        }
      });
  };

  return (
    <ul>
      <li>ID: {user?.id}</li>
      <li>Name: {user?.name}</li>
      <button
        onClick={() => navigate("/users/" + user?.id + "/edit")}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 px-4 py-2 rounded text-white"
      >
        Delete
      </button>
    </ul>
  );
};

export default UserDetail;
