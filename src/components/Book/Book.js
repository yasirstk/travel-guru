
import React from "react";
import {  useHistory } from "react-router-dom";
import Rectangle1 from "../Home/Rectangle1.png";


const Book = () => {
  const history = useHistory();

  const handleBooking = () => {
    history.push("/hotels");
  };

  return (
    <div style={{ backgroundImage: `url(${Rectangle1})` }}>
      <div className="row">
        <div className=" col-6 ">
          <h1 style={{ color: "white" }}>Cox's Bazar</h1>
          <p style={{ color: "white" }}>
            Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city,
            fishing port, tourism centre and district headquarters in
            southeastern Bangladesh. It is famous mostly for its long natural
            sandy beach,
          </p>
        </div>

        <div className=" col-6 ">
          <form onSubmit={handleBooking}>
            <h5 style={{ color: "white" }}>Origin</h5>
            <input type="text" placeholder="Dhaka" />
            <h5 style={{ color: "white" }}>Destination</h5>
            <input type="text" placeholder="Cox's Bazar" />
            <h5 style={{ color: "white" }}>From</h5>
            <input type="text" placeholder="01/01/2020" />
            <h5 style={{ color: "white" }}>To</h5>
            <input type="text" placeholder="01/01/2020" />
            <br />
            <input
              type="submit"
              value="start-booking"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
