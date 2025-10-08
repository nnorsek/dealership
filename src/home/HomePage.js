import React from "react";
import "./homeStyles/HomePage.css";
import SelectSearch from "../components/SelectSearch";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="home-text">
        <p>Find cars for sale and for rent near you</p>
        <h1>Find Your Dream Car</h1>
        <SelectSearch />
      </div>
    </div>
  );
};

export default HomePage;
