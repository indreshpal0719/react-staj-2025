import { supabase } from "../supabase";

type Props = {
  id: string;
  getProducts: () => void;
};

const ProductDelete = ({ id, getProducts }: Props) => {
  const handleDelete = () => {
    // Delete id
    supabase
      .from("products")
      .delete()
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          return alert(error.message);
        }
        getProducts();
      });
  };
  return <button onClick={handleDelete}>Sil</button>;
};

export default ProductDelete;
