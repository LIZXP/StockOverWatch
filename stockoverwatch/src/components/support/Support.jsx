import React from "react";
import "./support.styles.scss";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

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
                <span>Chris.Bowyer@gmail.com</span>
              </li>
              <li>
                <span>
                  <EmailIcon />
                </span>
                <span>Bryan.Nuguyen@gmail.com</span>
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
        <div className="contactForm">
          <h2>Send us a Message</h2>
          <div className="formBox">
            <div className="inpuitBox"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
