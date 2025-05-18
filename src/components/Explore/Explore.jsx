import React from "react";
import ExploreTopics from "./ExplorePosts/ExploreTopics";
import ExploreBusiness from "./ExplorePosts/ExploreBusiness";
import ExploreJobs from "./ExplorePosts/ExploreJobs";
import ExploreClasses from "./ExplorePosts/ExploreClasses";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardProfile.css"; // Import CSS for styling

export default function DashboardProfile() {
  return (
    <div className="dashboard-profile" id="dashboard-profile">
      <div className="container-fluid">
        {/** Start Main container */}

        <div className="container ">
          <div className="border border-2 rounded">
            {/**start Upgrade */}
            <div className="bg-danger-subtle">
              <div className="px-5 py-4">
                <h5 className="fw-bolder">
                  Upgrade to Premium <b>+</b>
                </h5>

                <h6 className="w3-margin-top small text-danger">
                  <i>
                    {" "}
                    Enjoy additional benefits, zero ads and the largest reply
                    prioritization.{" "}
                  </i>
                </h6>
                <div className=" text-end w3-3">
                  <button className=" btn btn-outline-dark rounded-5 w-100">
                    {" "}
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
            {/**end Upgrade */}

            {/**start Upgrade */}
            <div className="border-top border-bottom border-danger bg-black">
              <div className="px-5 py-4 text-center">
                <h3 className="fw-bolder text-light">Marketplace</h3>
                <p className="small w3-2 text-light fw-light text-uppercase">
                  Track progress in a single location
                </p>
                <h6 className="small text-light">
                  Barter, Buy, Advertise or Trade-
                  <i className=" fw-light">
                    {" "}
                    Check out the beauPro marketplace for like-minded
                    professionals.{" "}
                  </i>
                </h6>

                <i
                  className="fab fa-shopify mx-1"
                  style={{ color: "#32CD32" }}
                ></i>
                <i
                  className="fab fa-pinterest  mx-1"
                  style={{ color: "red" }}
                ></i>
                <i
                  className="fab fa-etsy mx-1"
                  style={{ color: "#ff7518" }}
                ></i>
                <i className="fab fa-ebay text-white mx-1"></i>
                <i className="fab fa-facebook text-primary mx-1"></i>
                <i
                  className="fab fa-tiktok mx-1"
                  style={{ color: "purple" }}
                ></i>

                <div className=" text-end w3-3">
                  <button className=" btn btn-outline-light rounded-5 w-100">
                    {" "}
                    Learn How
                  </button>
                </div>
              </div>
            </div>
            {/**end Upgrade */}

            <ExploreBusiness />
            <ExploreTopics />
            <ExploreJobs />
            <ExploreClasses />

            {/*End Right Column Quarter*/}

            {/*} End Grid*/}
          </div>
          {/*}End Main row*/}
        </div>
      </div>
    </div>
  );
}
