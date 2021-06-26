import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/SA transparent.png";

function Navbar() {
  return (
    <div className="flex mt-10 justify-between">
      <div>
        <Link to="/">
          <img className="w-24 mr-10" src={Logo} />
        </Link>
      </div>
        <NavLink className="text-2xl focus:text-blue-400 hover:text-blue-400" to="/">
          Home
        </NavLink>

        <NavLink className="text-2xl focus:text-blue-400 hover:text-blue-400" to="/scholarship">
          Scholarship
        </NavLink>

        <NavLink className="text-2xl focus:text-blue-400 hover:text-blue-400" to="/internship">
          Internship
        </NavLink>

        <NavLink className="text-2xl focus:text-blue-400 hover:text-blue-400" to="/exchange">
          Exchange Program
        </NavLink>

        <NavLink className="text-2xl focus:text-blue-400 hover:text-blue-400" to="/oppertunity">
          Oppertunity
        </NavLink>

        <NavLink className="p-5 focus:bg-blue-500 bg-white-200 shadow-xl rounded-full" to="/addpost">
          <button className='text-2xl'>+</button>
        </NavLink>


      </div>
  );
}

export default Navbar;
