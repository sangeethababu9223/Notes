import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to='/'>List Notes</Link>
      </li>
      <li>
        <Link to='/add-note'>Add Notes</Link>
      </li>
    </ul>
  );
};

export default Navigation;
