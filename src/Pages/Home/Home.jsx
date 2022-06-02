import React from "react";
import "./home.css";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../../Component/Header/Header";
import Featured from "../../Component/Featured/Featured";
import PropertyList from "../../Component/PropertyList/PropertyList";
import FeaturedProperty from "../../Component/FeaturedProperty/FeaturedProperty";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Explore Switzerland</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty />
      </div>
    </div>
  );
}
