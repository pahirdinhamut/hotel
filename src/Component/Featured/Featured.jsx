import React from "react";
import "./featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/686020.webp?k=8edc3c02842400dd78403f9af73c9ef845f8730d1599fffbd2ec7b9124205cba&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Zurich</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/686020.webp?k=8edc3c02842400dd78403f9af73c9ef845f8730d1599fffbd2ec7b9124205cba&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Zurich</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/686020.webp?k=8edc3c02842400dd78403f9af73c9ef845f8730d1599fffbd2ec7b9124205cba&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Zurich</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
