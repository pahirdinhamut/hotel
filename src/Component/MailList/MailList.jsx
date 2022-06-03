import React from "react";
import "./MailList.css";
function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTile">Save time, save money!</h1>
      <span className="mailDosc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInpitContainer">
        <input type="text" placeholder={"you mail"} />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default MailList;
