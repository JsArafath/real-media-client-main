import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UsersContext";
import './Navbar.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () =>{
    logOut()
      .then(() =>{
        toast.success('Successfully LogOut');
        navigate('/login');
      })
      .catch(() =>{})
  }

  const menu = (
    <li>
      <Link className="text-white" to="/">
        Home
      </Link>
      <Link className="text-white" to="/media">
        Media
      </Link>
      <Link className="text-white" to="/about">
        About
      </Link>
      {user ? (
        <Link onClick={handleSignOut} className="text-white">
          LogOut
        </Link>
      ) : (
        <Link className="text-white" to="/login">
          Login
        </Link>
      )}
    </li>
  );
  return (
    <div className="bg-black">
      <div className="container">
        <div className="navbar flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                id="navbar_background"
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
              </ul>
            </div>
            <Link className="text-white text-3xl font-bold" to="/">
              RealBook
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
