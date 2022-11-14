import React from "react";
import "./body.styles.scss";
import video from "../../assets/piggybg.mp4";
import Typewriter from "typewriter-effect";

function Body() {
  return (
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
  );
}

export default Body;
