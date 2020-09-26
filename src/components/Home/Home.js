import React from "react";
import TravelDestination from "../TravelDestination/TravelDestination";
import Rectangle1 from "./Rectangle1.png";

import "./Home.css";

import { Places } from "../../fakedata/Place";


const Home = () => {
  const styles = {
    display: "flex",
    margin: "40px",
    justifyContent: "space-between",
  };
  const newStyle = {
    marginLeft: "10px",
  };

  const travelDestinations = Places;

  return (
    <div style={{ backgroundImage: `url(${Rectangle1})` }}>
      
      <div style={styles} className="">
        {travelDestinations.map((travelDestination) => (
          <TravelDestination
            key={travelDestination.id}
            travelDestination={travelDestination}
          ></TravelDestination>
        ))}
      </div>
    </div>
  );
};

export default Home;
