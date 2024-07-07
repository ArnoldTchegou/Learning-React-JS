import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../pages/Authenticate";

export default function RootLayout() {
  const auth = useAuth();

  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="Users">Users</NavLink>
          <NavLink to="Profile">Profile</NavLink>
          {!auth.user && <NavLink to="login">Login</NavLink>}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
