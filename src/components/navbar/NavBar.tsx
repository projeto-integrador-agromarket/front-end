import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoEditado.png";

function Navbar() {
  return (
    <>
      <div className="w-full bg-red-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg items-center">
          <div className="text-2xl font-bold uppercase flex items-center">
            <img src={logo} className="h-20 w=20 " />
            <h1>NossoPomar</h1>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/aboutus" className="hover:underline">
              Sobre Nós
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
