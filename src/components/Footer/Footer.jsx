import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="Contact">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+251984028660</li>
            <li>Leliseabebe038@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 - All Right Reserved</p>
    </div>
  );
}

export default Footer;
