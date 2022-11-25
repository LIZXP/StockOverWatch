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
        <div className="about-us">
          <h1>About This Project</h1>
          <div className="text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              voluptate dignissimos excepturi repellendus facere, rem suscipit
              molestiae, ratione consequatur omnis nobis eaque, hic
              necessitatibus commodi. Alias sequi nostrum nesciunt in! Ad fugiat
              eum nobis placeat voluptas at officiis cupiditate aliquam incidunt
              natus? Recusandae, delectus animi laudantium iste deserunt,
              obcaecati, sit mollitia aliquam sunt distinctio enim a vitae minus
              dolorem. Consequuntur!
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
