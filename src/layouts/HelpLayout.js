import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
