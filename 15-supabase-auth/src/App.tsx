import { useEffect, useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProductAdd from "./components/ProductAdd";
import ProductList, { type Product } from "./components/ProductList";
import Register from "./components/Register";
import UserStatus from "./components/UserStatus";
import { supabase } from "./supabase";

const App = () => {
  // usss
  const [sessionUserId, setSessionUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // uffs
  useEffect(() => {
    getProducts();
  }, [sessionUserId]);

  // Ürünleri getiren metot
  const getProducts = async () => {
    if (!sessionUserId) {
      return setProducts([]);
    }
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("user_id", sessionUserId)
      .order("created_at", { ascending: false });

    if (error) {
      return setProducts([]);
    }
    setProducts(data);
  };

  const logout = () => {
    setSessionUserId(null);
  };

  return (
    <div>
      <Login />
      <Register />
      <Logout logout={logout} />
      <UserStatus
        sessionUserId={sessionUserId}
        setSessionUserId={setSessionUserId}
      />
      <ProductAdd getProducts={getProducts} sessionUserId={sessionUserId} />
      <ProductList
        products={products}
        getProducts={getProducts}
        sessionUserId={sessionUserId}
      />
    </div>
  );
};

export default App;
