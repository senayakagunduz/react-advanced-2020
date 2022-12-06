import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
};

export default About;
