import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const Layout = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};
