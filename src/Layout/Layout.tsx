import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen gradient flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 text-white container mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">All rights reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
