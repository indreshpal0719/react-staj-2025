import { supabase } from "../supabase";

const Register = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Formun tarayıcı tarafından gönderilmesi engelliyoruz
    e.preventDefault();
    // Form içerisindeki verileri formData objesi olarak alıyoruz
    const formData = new FormData(e.currentTarget);
    // email ve parola input value bilgilerini get ile çekiyoruz
    const email = formData.get("email");
    const password = formData.get("password");
    // Kullanıcıyı kaydediyoruz
    const { data, error } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("Maile bak bişiler gelmiştir");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Register</h1>
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
      <button>Kayıt ol</button>
    </form>
  );
};

export default Register;
