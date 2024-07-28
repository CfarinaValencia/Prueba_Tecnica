import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Actividades</Link>
      <Link to="/parcelas">Parcelas</Link>
    </nav>
  );
};

export default Navbar;
