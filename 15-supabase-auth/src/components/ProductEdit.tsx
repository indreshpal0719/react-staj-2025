import { supabase } from "../supabase";
import type { Product } from "./ProductList";

type Props = {
  product: Product;
  getProducts: () => void;
};

const ProductEdit = ({ product, getProducts }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");
    const { error } = await supabase
      .from("products")
      .update({
        name: name,
        price: Number(price) || 0,
      })
      .eq("id", product.id);

    if (error) {
      return alert(error.message);
    }

    getProducts();
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        className="border"
        defaultValue={product.name}
      />
      <input
        name="price"
        type="number"
        className="border"
        defaultValue={product.price}
      />
      <button className="cursor-pointer">Kaydet</button>
    </form>
  );
};

export default ProductEdit;
