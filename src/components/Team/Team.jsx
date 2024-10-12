import React from "react";
import { assets } from "../../assets/assets";
import "./Team.css";

function Team() {
  return (
    <div className="Team-container">
      <h1 className="TeamHeader">Meet Our Experts</h1>
      <div className="Team" id="Team">
        <div className="experts">
          <img src={assets.josh} alt="" srcset="" />
          <h1>Joshua Joseph</h1>
          <p>Owner of Lelise Coffee</p>
        </div>
        <div className="experts">
          <img src={assets.lense} alt="" srcset="" />
          <h1>Lelise Abebe</h1>
          <p>Manager of Lelise Coffee</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
