import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <nav>
        <NavLink to="User 1">you'r a user</NavLink>
        <NavLink to="Admin">you'r admin</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Filter Users</button>
      </div>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};

export default Users;
