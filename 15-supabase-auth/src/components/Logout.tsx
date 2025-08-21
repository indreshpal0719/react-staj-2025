import { supabase } from "../supabase";

type Props = {
  logout: () => void;
};

const Logout = ({ logout }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Kullanıcıyı çıkış ediyoruz
    const { error } = await supabase.auth.signOut();
    console.log(error);
    alert("Çıkış başarılı");
    logout();
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Çıkış Yap</h1>
      <button>Çıkış</button>
    </form>
  );
};

export default Logout;
