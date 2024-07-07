import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="help-layout">
      <input type="search" placeholder="Search products" />
      <nav>
        <NavLink to="view">View</NavLink>
        <NavLink to="buy">Buy</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Products;
