import { Outlet } from "react-router";
import BottomNavigation from "../components/common/BottomNavigation";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
