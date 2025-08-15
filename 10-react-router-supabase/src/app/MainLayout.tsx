import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-between p-4">
          <li>
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <div className="flex gap-4">
            <li>
              <Link to={"/users/add"}>Ekle</Link>
            </li>
            <li>
              <Link to={"/users/:id"}>Detay</Link>
            </li>
            <li>
              <Link to={"/users/:id/edit"}>Düzenle</Link>
            </li>
          </div>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
