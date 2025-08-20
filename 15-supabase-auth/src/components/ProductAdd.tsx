import { supabase } from "../supabase";

type Props = {
  sessionUserId: string | null;
};

// rafce
const ProductAdd = ({ sessionUserId }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");
    // Henüz kullanıcı giriş yapmadıysa
    if (sessionUserId === null) {
      alert("Giriş yap da gel");
      return;
    }
    const { data, error } = await supabase
      .from("products")
      .insert({
        user_id: sessionUserId,
        name: name,
        price: Number(price) || 0,
      })
      .select()
      .single();
    if (error) {
      return alert(error.message);
    }
    console.log(data);
    alert(data.name + " eklendi");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ürün ekleme</h1>
      <input
        type="text"
        placeholder="Ürün adı"
        name="name"
        defaultValue={"iPhone"}
      />
      <input
        type="number"
        placeholder="Fiyat"
        name="price"
        defaultValue={"59000"}
      />
      <br />
      <button>Ürünü ekle</button>
    </form>
  );
};

export default ProductAdd;
