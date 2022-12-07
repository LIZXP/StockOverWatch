import React from "react";
import "./support.styles.scss";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import peter from "../../assets/peter.jpg";
import chris from "../../assets/chris.jpg";
import bryan from "../../assets/bryan.jpg";

function Support() {
  return (
    <section>
      <div className="support-container">
        <div className="contactinfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <EmailIcon />
                </span>
                <span>Peter.xli@outlook.com</span>
              </li>
              <li>
                <span>
                  <EmailIcon />
                </span>
                <span>christianbowyer1996@gmail.com</span>
              </li>
              <li>
                <span>
                  <EmailIcon />
                </span>
                <span>bryan225577@gmail.com</span>
              </li>
            </ul>
            <ul className="sci">
              <li>
                <GitHubIcon />
              </li>
              <li>
                <a href="https://github.com/LIZXP">Peter Li</a>
              </li>
              <li>
                <GitHubIcon />
              </li>
              <li>
                <a href="https://github.com/Devcab2">Chris Bowyer</a>
              </li>
              <li>
                <GitHubIcon />
              </li>
              <li>
                <a href="https://github.com/dungminhnguyen257">Bryan Nguyen</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-us">
          <h1>About The Project</h1>
          <div className="text">
            <p>
              It all started with a dream.These are Creators behind Stockoverwatch. Three brave software developers spent 3 weeks designing and building this  user friendly stock tool. The biggest challenge that we faced was using the free version of finnhub API which limited the number of calls that our app could perform per minute causing massive bugs and these devs to lose many nights of sleep over. Here is their contact info.... please don't contact us. We hope you enjoy StockOverwatch!
            </p>
            <div className="dev-pics">
              <img src={peter} alt="peter" />
              <img src={chris} alt="chris" />
              <img src={bryan} alt="bryan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
