import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function About() {
  return (
    <div>
      <h1>this is About us page</h1>
      <Link to='/'>return</Link>
    </div>
  );
}

export default About;
