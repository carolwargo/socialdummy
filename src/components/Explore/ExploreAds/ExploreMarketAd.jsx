import React from 'react';  


const ExploreMarketAd = () => {  

    return (
        <div>
                       <div style={{
        background: "linear-gradient(45deg, black, #001322,rgb(4, 38, 65),  #051f33, #0d2d44, #0c2b41, #0c2b41, #051f33,  #001322)"}} className="border-top border-bottom mt-3">


        <div className="px-5 py-5 text-center">
          <h3 className="fw-bolder text-light">Marketplace</h3>
     
          <h6 className=" text-light my-3">
            Barter, Buy, Advertise or Trade-
            <i className=" fw-light">
              {" "}
              Check out the beauPro marketplace for like-minded professionals.{" "}
            </i>
          </h6>

          <i className="fab fa-shopify mx-1 text-white opacity-75"></i>
          <i className="fab fa-pinterest mx-1 text-white opacity-75"></i>
          <i className="fab fa-etsy mx-1 text-white opacity-75"></i>
          <i className="fab fa-ebay mx-1 text-white opacity-75"></i>
          <i className="fab fa-facebook  mx-1 text-white opacity-75"></i>
          <i className="fab fa-tiktok mx-1 text-white opacity-75"></i>
 
          <div className=" text-end mt-3">
            <button className=" btn btn-outline-light rounded-5 w-100">
              {" "}
              Learn How
            </button>
          </div>
        </div>
      </div>
      </div>
     

    );
}



export default ExploreMarketAd;
