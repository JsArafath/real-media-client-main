import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-200 p-10 bg-black">
      <footer className="footer footer-center container text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link className="text-white" to="/">Home</Link>
          <Link className="text-white" to="/media">Media</Link>
          <Link className="text-white" to="/about">About</Link>
          <Link className="text-white" to="/login">Login</Link>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link><FaFacebookF className="text-white text-2xl hover:text-green-600"/></Link>
            <Link><FaLinkedin className="text-white text-2xl hover:text-green-600" /></Link>
            <Link><FaYoutube className="text-white text-2xl hover:text-green-600"/></Link>
          </div>
        </div>
        <div>
          <p className="text-white">Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
