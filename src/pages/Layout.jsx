import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-20 bg-black text-white">
        <Navbar />
      </div>

      <Outlet />
    </>
  );
};

export default Layout;