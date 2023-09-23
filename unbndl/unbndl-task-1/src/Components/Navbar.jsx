import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss"
import logo from "../assets/logo.png"

function Navbar({cartLength}) {
    const [totallength, setTotalLength] = useState(0);

    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setTotalLength(storedCart.length);
    }, []); 
  return (
    <div id="navbar" className="navbar">
      <div className="menu">
      <Link to={"/"}>
      <i class="fa fa-bars"></i>
      </Link>
      </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="item">
        <Link to={"/"}> <strong>Home</strong> </Link>
        <Link to={"/cart"}>
          <i class="fa fa-cart-plus">
            
          </i>
          <span >{cartLength}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
