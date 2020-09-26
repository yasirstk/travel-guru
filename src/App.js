import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { HotelData } from "./fakedata/FavHotels";
import Header from "./components/Header/Header";
import Hotels from "./components/Hotels/Hotels";
import NotFound from "./components/NotFound";


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  }); 
    const [loggedInUser, setLoggedInUser] = useState({});
    console.log(user);
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, user, setUser}}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <PrivateRoute path="/hotels">
            <Hotels/>
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route> 
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
