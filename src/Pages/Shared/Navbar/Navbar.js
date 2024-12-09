import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
// import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <button className="btn btn-outline  normal-case text-xl">
        <Link to="/">Home</Link>
      </button>
      <li>
        <Link className="btn btn-outline  normal-case text-xl" to="/appointment">
          Appointment
        </Link>
      </li>
      <li>
        <Link className="btn btn-outline  normal-case text-xl" to="/about">
          About
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link className="btn btn-outline  normal-case text-xl" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <button className="btn btn-outline  normal-case text-xl" onClick={handleLogOut}>
              Sign out
            </button>
          </li>
        </>
      ) : (
        <button className="btn btn-outline  normal-case text-xl">
          <Link to="/login">Login</Link>
        </button>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbarcss sticky top-0 z-50  shadow-md navbar bg-teal-700 flex justify-between">
        
      <div className="navbar-start">
        <Link to="/" className="btn btn-outline  normal-case text-xl">
          Doctors Eye
        </Link>
        
        <div className="dropdown absolute origin-top-right right-0 focus:outline-none">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          {/* absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none */}
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <ul  role="none" tabIndex={1} className=" py-1 menu menu-compact dropdown-content mt-3 p-2 shadow bg-teal-700 rounded-box w-52">
            {menuItems}
          </ul>
          </div>
          
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    
    </div>
  );
};

export default Navbar;
