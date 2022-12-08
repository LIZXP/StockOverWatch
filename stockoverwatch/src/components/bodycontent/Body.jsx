import React from "react";
import "./body.styles.scss";
import video from "../../assets/piggybg.mp4";
import Typewriter from "typewriter-effect";
import "./bodyTwo.styles.scss";
import image1 from "../../assets/Revenue-bro.svg";
import image2 from "../../assets/Finance-pana.svg";

function Body() {
  return (
    <>
      <div className="body-container">
        <div className="piggy-video">
          <video autoPlay loop muted className="piggy-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="rich-text">
          <Typewriter
            options={{
              strings: [
                "You are richer than you think.",
                "Expertise you need. Service you deserve!",
                "Simpler. Faster. Friendlier.",
                "Because life’s complicated enough.",
                "Investing for people with better things to do!",
              ],
              autoStart: true,
              loop: true,
            }}
            className="rich-text"
          />
        </div>
        <div className="join-us">
          <h2>Join us today</h2>
        </div>
        <div className="blah-blah">
          <h4>
            We’re reinventing how Canadians spend, save, and grow their money –
            all together, in one place. Join us as we set the new standard.
          </h4>
        </div>
      </div>
      <div className="bodytwo-container">
        <h1 className="big-title">Investing has never be this easy</h1>
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
    </>
  );
}

export default Body;
