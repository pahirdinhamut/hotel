import React from "react";
import "./SearchItem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/309470591.webp?k=a63b7ad5ef53357782fe29bcdad17ab22502b63ea57356f678d394eb45046e35&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Mardin Hotel</h1>
        <span className="siDistence">500m from center</span>
        <span className="siTaxiOp">Free airport taxi </span>
        <span className="Subtitle">Set in Istanbul, 2.2 km</span>
        <span className="siFeatures">1 double bed</span>
        <span className="siCancelOp">
          FREE cancellation • No prepayment needed
        </span>
        <span className="siCancelOptionTitle">
          You can cancel later, so lock in this great price today.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Exellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOP">Includes taxes and fees</span>
          <button className="siCheckButton">See Awailablity</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
