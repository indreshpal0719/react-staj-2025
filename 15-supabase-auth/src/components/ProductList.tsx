import ProductDelete from "./ProductDelete";
import ProductEdit from "./ProductEdit";

// rafce
type Props = {
  sessionUserId: string | null;
  getProducts: () => void;
  products: Product[];
};

export type Product = {
  id: string;
  user_id: string;
  name: string;
  price: number;
  created_at: string;
};

const ProductList = ({ products, getProducts }: Props) => {
  return (
    <div>
      {products.map((p) => (
        <li className="flex gap-4">
          <span>
            {p.name} : {p.price}
          </span>
          <ProductDelete id={p.id} getProducts={getProducts} />
          <ProductEdit product={p} getProducts={getProducts} />
        </li>
      ))}
    </div>
  );
};

export default ProductList;
