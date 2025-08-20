import { supabase } from "../supabase";

const Login = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    // Kullanıcıyı login ediyoruz
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("Giriş başarılı");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Giriş Yap</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        defaultValue={"ozcanzaferayan@gmail.com"}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        defaultValue={"passw0rd!"}
      />
      <br />
      <button>Giriş</button>
    </form>
  );
};

export default Login;
