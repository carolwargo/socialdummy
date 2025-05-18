//./components/Header/Header.jsx  
import React from "react";
import GirlCamera from "../../assets/images/GirlCamera.png";
import HeaderBanner from "../../assets/images/HeaderBanner.png";
import Badges from "../Badges/Badges";  

import { MdVerified } from "react-icons/md";

function Header() {
  return (
    
    <div className="social-header">
      {/* CSS-in-JS for scoped styles */} 
      <style>
        {`
          .social-header {
            position: relative;
            width: 100%;
            height: 300px;
            background-color: #eee;
            margin-bottom: calc(4rem + 160px); /* Increased to account for profile-overlay */
          }

          /* Medium screens (tablets) */
          @media (max-width: 992px) {
            .social-header {
              height: 250px;
              margin-bottom: calc(3rem + 140px); /* Adjusted for smaller overlay */
            }
          }

          /* Small screens (phones) */
          @media (max-width: 576px) {
            .social-header {
              height: 200px;
              margin-bottom: calc(3rem + 130px); /* Adjusted for smaller overlay */
            }
          }

          .header-banner {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            opacity: 0.5;
          }

          .profile-overlay {
            position: absolute;
            bottom: -340px;
            left: 15px;
            display: flex;
            flex-direction: column;
            align-items: start;
            z-index: 100;
          }

          .profile-image {
            width: 150px;
            height: 150px;
            border: 4px solid #fff;
            border-radius: 50%;
            object-fit: cover;
            background-color: #fff;
          }

          /* Medium screens (tablets) */
          @media (max-width: 992px) {
            .profile-image {
              width: 140px;
              height: 140px;
            }
            .profile-overlay {
              bottom: -140px; /* Adjusted for tablets */
            }
          }

          /* Small screens (phones) */
          @media (max-width: 576px) {
            .profile-image {
              width: 115px;
              height: 115px;
            }
            .profile-overlay {
              bottom: -330px; /* Adjusted for phones */
            }
              
          .profile-info h2 {
            font-weight: 800;
            font-size: 1.5rem;  
          }

          
          .profile-info p {
            font-weight: 500;
            font-size: .9rem;  
          }

          }

 
          .profile-info h2 {
            font-weight: 800;
          }

          .profile-info p {
            font-weight: 500;
          }
        `}
      </style>
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
          <p className="text-muted">@username</p>
          <p className="text-muted my-1">
            <i className="bi-calendar-check" style={{ fontSize: '.85rem' }}></i> Joined April 2001
          </p>
          <p className="text-muted">
            <span className="text-black fw-bold" style={{ marginRight: '5px' }}>123</span>
            <span style={{ marginRight: '10px' }}>Followers</span>
            <span className="text-black fw-bold">321</span>
            <span style={{ marginLeft: '5px' }}>Following</span>
          </p>
            <div>
          <Badges/>
          </div>
          <br />
     
        </div>
      </div>
    </div>
  );
}

export default Header;