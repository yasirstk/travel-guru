import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "./Logo.png";



const Header = () => {
 //const [loggedInUser, setLoggedInUser] = useState({});
 const {user, setUser} = useContext(UserContext);
 
  
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
            <span style={{ marginLeft: "10px", color: "blue" }}> email: {user.email}</span>
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
