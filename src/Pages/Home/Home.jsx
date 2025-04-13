import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import CoffeeList from "../../components/CoffeeList/CoffeeList";
import Team from "../../components/Team/Team";
import Customer from "../../components/Customer/Customer"
import About from "../About/About";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <CoffeeList />
      <Team />
    </div>
  );
}

export default Home;
