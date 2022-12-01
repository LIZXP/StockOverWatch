import React from "react";
import "./userprofile.styles.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useForm from "../../../userData";
function UserProfile() {
  const { values, handleSubmit, onChange } = useForm();

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="account-info">
          <h1>Profile Settings</h1>
          <p>
            You can change your display name, change your profile picture and manage your social media accounts.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* use map function to get the user info */}
          <div className="user-info-image">
            <div className="input-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                alt="user-icon"
              />
              <input
                type="text"
                placeholder="input the img url..."
                name="icon"
              />
            </div>
            <div className="form-box-input">
              <label htmlFor="name">Username</label>
              <div className="form-box-input-box">
                <div className="user-icon">
                  <AccountBoxIcon />
                </div>
                <input
                  type="text"
                  placeholder={"userName..."}
                  className="user-input"
                  name="username"
                  value={values.username}
                  onChange={onChange}
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
                name="website"
                value={values.website}
                onChange={onChange}
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
                name="linkedin"
                value={values.linkedin}
                onChange={onChange}
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
                name="facebook"
                value={values.facebook}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-box-input-social">
            <label htmlFor="twitter">Twitter</label>
            <div className="form-box-input-box">
              <div className="email-icon">
                <TwitterIcon />
              </div>
              <input
                type="text"
                placeholder="twitter..."
                className="twitter"
                name="twitter"
                value={values.twitter}
                onChange={onChange}
              />
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
                name="instagram"
                value={values.instagram}
                onChange={onChange}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
