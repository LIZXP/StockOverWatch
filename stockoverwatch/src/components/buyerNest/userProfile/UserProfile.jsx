import React from "react";
import "./userprofile.styles.scss";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
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
            You can change your display name, change your profile picture and
            manage your social media accounts.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* use map function to get the user info */}
          <div className="form-box-input">
            <div className="input-image">
              <label htmlFor="name">Avartar</label>
              <div className="form-box-input-box">
                <div className="user-icon">
                  <PhotoSizeSelectActualIcon />
                </div>
                <input
                  type="text"
                  placeholder="input the img url..."
                  name="icon"
                  value={values.icon}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="input-username">
              <label htmlFor="name">Username</label>
              <div className="form-box-input-box">
                <div className="user-icon">
                  <AccountBoxIcon />
                </div>
                <input
                  type="text"
                  placeholder={"username..."}
                  className="user-input"
                  name="username"
                  value={values.username}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="social-box">
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
          </div>
          <button type="submit" className="btn-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
