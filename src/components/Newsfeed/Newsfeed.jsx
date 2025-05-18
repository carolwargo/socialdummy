import React from "react";
import PostsForm from "../Posts/PostForm/PostForm";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../components/DashboardComponents/DashboardProfile/DashboardProfile.css"; // Import CSS for styling
import UserNav from '../Navigation/UserNav/UserNav'


export default function Newsfeed() {
  return (
    <div className="newsfeed" id="newsfeed">


<UserNav/>
      {/* Add extra spacer div */}
      <div className="mt-5"></div> {/* You can adjust the 100px as needed */}

      {/* Start Newsfeed */}
      <div className="container-fluid w-100">
        <PostsForm />
        <PostsForm />
      </div>
      {/* End Newsfeed */}
    </div>
  );
}


/**
          <div className="mt-2">
            <div className="bg-white border border-secondary-subtle border-2 rounded">
              <div className=" w3-padding-large ">
                <div className="post-wrapper">
                  <Link to={"/"} className=" text-decoration-none">
                    <div className="row align-items-center justify-content-start">
                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <img
                          src={GirlCamera}
                          alt=""
                          className="shadow rounded-circle w3-hide-medium w3-hide-small mb-0 mt-1"
                          style={{ width: "65%" }}
                        />
                      </div>
                      <div className="col-sm-10 col-md-10 col-lg-10 align-items-center justify-content-start">
                        <span className="text-primary fw-bold">
                          What's Happening?
                        </span>
                        <br />
                        <span className="card-title opacity-75 small typing-indicator"></span>
                        <span className="card-title opacity-25 small fw-bold">
                          Start a Post
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
         End Menu Icons */
