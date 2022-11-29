import React from "react";
import "./userprofile.styles.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WalletIcon from "@mui/icons-material/Wallet";

function UserProfile() {
  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="account-info">
          <h1>Profile Settings</h1>
          <p>
            You can change your display name, change your profile picture and
            manage your social media accounts.
          </p>
        </div>
        <form>
          {/* use map function to get the user info */}
          <div className="user-info-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt="user-icon"
            />
            <div className="form-box-input">
              <label htmlFor="name">Username</label>
              <div className="form-box-input-box">
                <div className="user-icon">
                  <AccountBoxIcon />
                </div>
                <input
                  type="text"
                  placeholder="userName..."
                  className="user-input"
                />
              </div>
              <label htmlFor="email">Email</label>
              <div className="form-box-input-box">
                <div className="email-icon">
                  <EmailIcon />
                </div>
                <input
                  type="text"
                  placeholder="email..."
                  className="user-input"
                />
              </div>
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="website">Website</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <LanguageIcon />
              </div>
              <input
                type="text"
                placeholder="https://..."
                className="website"
              />
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="linkedin">LinkedIn</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <LinkedInIcon />
              </div>
              <input
                type="text"
                placeholder="linkedin..."
                className="linkedin"
              />
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="facebook">Facebook</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <FacebookIcon />
              </div>
              <input
                type="text"
                placeholder="facebook..."
                className="facebook"
              />
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="twitter">Twitter</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <TwitterIcon />
              </div>
              <input type="text" placeholder="twitter..." className="twitter" />
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="instagram">Instagram</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <InstagramIcon />
              </div>
              <input
                type="text"
                placeholder="instagram..."
                className="instagram"
              />
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="wallet">Wallet</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <WalletIcon />
              </div>
              <input type="text" placeholder="wallet..." className="wallet" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
