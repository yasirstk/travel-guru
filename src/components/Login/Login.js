import React, { useContext, useState } from "react";
// import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import { useHistory, useLocation } from "react-router-dom";


firebase.initializeApp(firebaseConfig);

function Login() {
  const {loggedInUser, setLoggedInUser, user, setUser} = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  

 
  const history = useHistory();
  const location = useLocation();
  let { from} = location.state || {from : {pathname: "/"}  }
  

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email, uid } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          uid: uid,
          email:email,
          photo: photoURL,
        };
       
        setUser(signedInUser);
        
        // console.log(signedInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (res) {
        const { displayName, photoURL, email, uid } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          uid: uid,
          email:email,
          photo: photoURL,
        };
        setUser(signedInUser);
        // console.log(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        setUser(signedOutUser);
      })
      .catch((err) => {
        // An error happened.
      });
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log("sign in user info", res.user);
        })
        .catch(function (error) {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
    
  return (
    <div>
      <div className="login" style={{ textAlign: "center" }}>
        <h3>Travel Guru Authorization</h3> <br />
        {user.isSignedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
        <br />
        {user.isSignedIn && (
          <div>
            <p>Welcome, {user.name}!</p>
            <p>Your email: {user.email}</p>
            {/* <img src={user.photo} alt="" /> */}
          </div>
        )}
        <input
          type="checkbox"
          onChange={() => setNewUser(!newUser)}
          name="newUser"
          id=""
        />
        <label htmlFor="newUser">New User Sign up</label>
        <form onSubmit={handleSubmit}>
          {newUser && (
            <div>
              {" "}
              <input
                name="name"
                type="text"
                onBlur={handleBlur}
                placeholder="First name"
              />{" "}
              <br />
              <input
                name="name"
                type="text"
                onBlur={handleBlur}
                placeholder="Last name"
              />{" "}
            </div>
          )}
          <br />
          <input
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="Your Email address"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Your Password"
            required
          />
          <br />
          <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
        </form>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "created" : "Logged In"} successfully
          </p>
        )}
        <br />
        <button onClick={handleFbSignIn}>Sign in using Facebook</button>
        <br />
        <button onClick={handleSignIn}>Sign in using google account</button>
      </div>
    </div>
  );
}

export default Login;
