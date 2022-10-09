import React from "react";
import { Link } from "react-router-dom";

const Heder = () => {
  return (
    <div className="m-3 text-center">
      <Link className="mx-3 p-3 " to="/">
        Home
      </Link>
      <Link className="mx-3" to="/orders">
        Orders
      </Link>
      <Link className="mx-3" to="/about">
        About
      </Link>
    </div>
  );
};

export default Heder;
