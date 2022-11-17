import React from "react";
import "./bodyTwo.styles.scss";
import image1 from "../../assets/Revenue-bro.svg";
import image2 from "../../assets/Finance-pana.svg";

function BodyTwo() {
  return (
    <div className="bodytwo-container">
      <h1 className="big-title">Investing never be this easy</h1>
      <p>No more on paper theory, put them in real practice.</p>
      <div className="top">
        <h1>Do the investment quick, easy and painfree</h1>

        <img src={image1} alt="Revenue-bro" className="right-image" />
      </div>
      <div className="bottom">
        <img src={image2} alt="Coins-pana" className="left-image" />
        <h1>Trade thousands of stocks at your finger tip, commission-free</h1>
      </div>
    </div>
  );
}

export default BodyTwo;
