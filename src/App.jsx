import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
