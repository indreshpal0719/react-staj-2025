import { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProductAdd from "./components/ProductAdd";
import Register from "./components/Register";
import UserStatus from "./components/UserStatus";

const App = () => {
  // usss
  const [sessionUserId, setSessionUserId] = useState<string | null>(null);

  return (
    <div>
      <Login />
      <Register />
      <Logout />
      <UserStatus
        sessionUserId={sessionUserId}
        setSessionUserId={setSessionUserId}
      />
      <ProductAdd sessionUserId={sessionUserId} />
    </div>
  );
};

export default App;
