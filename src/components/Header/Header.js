import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "./Logo.png";



const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link className="btn btn-primary" to="/home">
              Home
            </Link>
          </li>
         
          <li>
            <Link className="btn btn-primary" to="/login">
              News
            </Link>
          </li>
          <li>
            <input type="text" className="" placeholder="Enter your choice" />
            <button style={{ marginLeft: "10px" }} className="btn btn-primary">
              Search
            </button>
            <button style={{ marginLeft: "10px" }}>User: {loggedInUser.name} email: {loggedInUser.email}</button>
          </li>
            
          <li>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Header;
