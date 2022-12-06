import React from "react";
import { Link, Outlet } from "react-router-dom";
import About from "../pages/About";
//import Navbar from "../components/Navbar";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>
      </nav>
      {/* <section className="section">
        <Outlet />
      </section> */}
    </>
  );
};

export default Navbar;
