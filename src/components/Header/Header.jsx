import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <>
      <div className="Header" id="Home">
        <div className="cover"></div>
        <video src={assets.video} autoPlay muted loop></video>
        <div className="header-contents">
          <h2>Experience Ethiopian Coffee!</h2>
          <p>
            Lelise Coffee brings exceptional flavor to every cup, no matter
            where you are or when you crave it. Sourced from the finest
            Ethiopian beans, our coffee is crafted for everyone to enjoy,
            anytime, anywhere.
          </p>
          <a href="#Contact">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default Header;
