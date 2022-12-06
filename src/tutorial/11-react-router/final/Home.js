import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about" className="btn">
        About
      </Link>
      <p>shake and bake</p>
    </div>
  );
};

export default Home;
