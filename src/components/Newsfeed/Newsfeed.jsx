//./components/Newsfeed.jsx
import Header from "../Header/Header";
import UserNav from "./UserNav";
import GirlCamera from "../../assets/images/GirlCamera.png";
import { newsfeedPosts } from "../../constants/NewsfeedPosts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Newsfeed.css"; // Import your CSS file for styling


import {
  FaImage,
  FaVideo,
  FaArrowUp,
  FaHome as FaHomeIcon,
  FaThumbsUp,
  FaComment,
  FaUnderline,
  FaBold,
  FaItalic,
} from "react-icons/fa";

export default function Newsfeed() {
  return (
    <div className="newsfeed-scroll">

      {/* The Grid */}
      <Header />
      <div style={{marginTop: "23rem"}}>
      <UserNav />
      </div>
      <div className="container">
        <hr className="mt-4 shadow" />
      </div>
      <div className=" my-4">
        <div className="w3-card w3-white w3-round w3-margin px-3 py-1">
          <div className="d-flex align-items-start my-3 ">
            <img
              src={GirlCamera}
              alt="Avatar 2"
              className="profile-img-small"
            />
            <div className="border rounded mt-2" style={{ width: "100%" }}>
              <textarea
                className="form-control w3-border w3-round"
                rows="2"
                placeholder="What's on your mind?"
                style={{ resize: "none", fontVariant: "primary" }}
              ></textarea>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between align-items-md-center my-2">
            {/* Left: Upload buttons */}
            <div className="d-flex flex-wrap align-items-center ms-0 ms-md-5 mb-2 mb-md-0">
              <div
                className="toolbar-btn me-2"
                title="Upload Image"
                aria-label="Upload image"
              >
                <FaImage />
              </div>
              <div
                className="toolbar-btn me-2"
                title="Upload Video"
                aria-label="Upload video"
              >
                <FaVideo />
              </div>
              <span
                className="toolbar-btn-transparent me-2"
                title="Underline"
                aria-label="Underline"
              >
                <FaUnderline />
              </span>
              <div
                className="toolbar-btn-transparent me-2"
                title="Bold text"
                aria-label="Bold text"
              >
                <FaBold />
              </div>
              <div
                className="toolbar-btn-transparent me-2"
                title="Italicize"
                aria-label="Italicize"
              >
                <FaItalic />
              </div>
            </div>

            {/* Right: Post button */}
            <div className='align-items-center ms-0 ms-md-5 mb-2 mb-md-0">'>
              <div
                className="post-btn me-2"
                title="Italicize"
                aria-label="Italicize"
              >
                <FaArrowUp />
              </div>
            </div>
          </div>
        </div>

        <>
      {newsfeedPosts.map((post) => (
        <div key={post.id} className="w3-card w3-white w3-round w3-margin">
          <div className="w3-margin">
            <br />
            <img src={post.avatar} alt="Avatar" className="profile-img-small" />
            <span style={{ fontSize: "1.25rem" }}>{post.name}</span>
            <span className="w3-right w3-opacity">{post.time}</span>
            <br />
            <hr className="w3-clear" />
            <p>{post.content}</p>
            {post.images.length > 0 && (
              <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                {post.images.map((img, index) => (
                  <div
                    key={index}
                    className={post.images.length === 1 ? "w3-col" : "w3-half"}
                  >
                    <img
                      src={img}
                      alt={`Post image ${index + 1}`}
                      className="w3-margin-bottom"
                      style={{ width: "100%" }}
                    />
                  </div>
                ))}
              </div>
            )}
            <button className="w3-button w3-theme-d1 w3-margin-bottom">
              <FaThumbsUp /> Like
            </button>
            <button className="w3-button w3-theme-d2 w3-margin-bottom">
              <FaComment /> Comment
            </button>
          </div>
        </div>
      ))}
    </>
      </div>
    </div>
  );
}
