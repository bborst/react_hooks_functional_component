import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Add Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
