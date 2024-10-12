import React from "react";
import { AboutUs } from "../../assets/assets";
import "./about.css"; // Assuming you create a separate CSS file for styling

function About() {
  return (
    <div className="about-us-container" id="About">
      <div className="about-us-header">
        <h1 className="about-us-heading">About Us</h1>
      </div>

      <div className="about-us-content">
        <p>
          At Lelise Coffee Import and Export, we are proud ambassadors of
          Ethiopia’s rich coffee heritage, bringing the finest Ethiopian coffee
          beans to the global market. As a family-owned business rooted in
          tradition and quality, we specialize in sourcing, exporting, and
          distributing premium coffee to Europe, Japan, and the USA.
        </p>
        <p>
          Lelise Coffee is committed to maintaining the highest standards in
          every stage of production, from farm to cup. We work closely with
          local Ethiopian farmers, ensuring that only the best beans—harvested
          from Ethiopia’s renowned coffee regions—reach your hands. Our direct
          relationships with farmers allow us to support sustainable agriculture
          while preserving the rich, authentic flavors that make Ethiopian
          coffee so unique.
        </p>
        <p>
          With decades of experience in the coffee industry, we combine
          traditional methods with modern processing techniques to provide
          consistently high-quality coffee. Whether it’s the fruity notes of
          Yirgacheffe, the bold richness of Sidamo, or the smooth aroma of
          Harrar, Lelise Coffee guarantees an unforgettable experience in every
          cup.
        </p>
        <p>
          Our mission is not only to share Ethiopia’s world-famous coffee with
          global consumers but also to promote ethical business practices,
          sustainability, and fair trade. We are passionate about fostering
          strong connections between Ethiopian coffee growers and international
          coffee lovers.
        </p>
        <p>
          Explore the world of Ethiopian coffee with Lelise Coffee Import and
          Export—where every bean tells a story of passion, quality, and
          tradition.
        </p>
      </div>
    </div>
  );
}

export default About;
