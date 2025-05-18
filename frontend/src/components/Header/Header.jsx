import React from "react";
import GirlCamera from "../../assets/images/GirlCamera.png";
import HeaderBanner from "../../assets/images/HeaderBanner.png";
import './Header.css';
import { MdVerified } from "react-icons/md";

function Header() {   // ✅ Now it’s a function component!
  return (
 
      <div className="social-header">
        {/* Background Banner */}
        <img
          src={HeaderBanner}
          alt="Header Background"
          className="header-banner"
        />

        {/* Profile Image + Info */}
        <div className="profile-overlay">
          <img
            src={GirlCamera}
            alt="Profile"
            className="profile-image"
          />

          <div className="profile-info">
            <h2 className="mb-0">
              Jocelyn Doe{" "}
              <span>
                <MdVerified style={{ color: "#0d6efd", fontSize: "1.2rem" }} />
              </span>
            </h2>
            <p className=" text-muted">@username</p>
            <p className=" text-muted my-1"><i className=" bi-calendar-check" style={{fontSize:'.85rem'}}></i> Joined April 2001</p>
            <p className=" text-muted "><span className="text-black fw-bold"  style={{marginRight:'5px'}}>123</span><span  style={{marginRight:'10px'}}>Followers</span> <span className="text-black fw-bold">321</span><span style={{marginLeft:'5px'}}>Following</span> </p>
          </div>
        </div>
      </div>
  );
}

export default Header;
