import { useNavigate } from "react-router";
import { supabase } from "./supabase";

const UserAdd = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    const formData = new FormData(e.currentTarget); // form elementinden veriyi al

    const name = formData.get("name");

    supabase
      .from("USERS")
      .insert({ name: name })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Isim:
        <input type="text" name="name" />
      </label>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default UserAdd;
