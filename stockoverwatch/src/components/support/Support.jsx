import React from "react";
import "./support.styles.scss";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Support() {
  return (
    <div className="support-container">
      <div className="contactinfo">
        <div>
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <AlternateEmailIcon /> <br />
              </span>
              <span>Peter.xli@outlook.com</span>
            </li>
            <li>
              <span>
                <AlternateEmailIcon /> <br />
              </span>
              <span>Chris.Bowyer@gmail.com</span>
            </li>
            <li>
              <span>
                <AlternateEmailIcon /> <br />
              </span>
              <span>Bryan.Nuguyen@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
