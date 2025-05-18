import React from "react";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import { Link } from "react-router-dom";

const NewPostForm = () => {
  return (
    <div className="mt-2">
      <div className="shadow-lg border border-secondary-subtle border-2 rounded">
        <div className="my-padding-large">
          <div className="post-wrapper">
          <div className="post-img-title">
  <img
    src={GirlCamera}
    alt="event"
    className="post-img rounded-circle shadow"
  />
  
  <div className="post-text mt-3">
    <h5 className="post-title">TITLE (EVENT)</h5>
    <p className="post-date">April 15, 2025</p>
  </div>
</div>


            <p className="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              pariatur minima harum recusandae perspiciatis obcaecati, ipsa
              laborum vero quas quis. Autem cumque nulla quasi sequi cum ad!
              Dolores, voluptas quasi.
            </p>

            <img src={GirlCamera} alt="girl camera" className="w-100" />
          </div>
          <p className="likes-shares">
            <span>
              Likes <b className="text-danger">12</b>
            </span>
            <span>
              Shares <b className="text-danger">12</b>
            </span>
          </p>

          <div className=" text-end my-3">
            <Link
              to={"/"}
              className="button text-decoration-none"
              id="download"
              download
            >
              <button className="btn my-black w-100 my-hover-opacity">
                Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
