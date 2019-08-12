import React from "react";

// Stateless Function Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
}

export default NavBar;

// Note: Stateless Function Component do not have props property instead the props is passed as an argument. React will pass the props object as an argument for stateless function component at runtime
// Using object destructuring eliminating the need to refer the props object