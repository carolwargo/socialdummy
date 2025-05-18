import React from 'react';  


const ExplorePremiumAd = () => {   

   
       return (
           <div>
           <div style={{
           background: "linear-gradient(45deg, black, #001322, #001c32,  #051f33, #0d2d44, #0c2b41, #0c2b41, #051f33,  #001322)"}} 
           className="border-top border-bottom mt-3">
           <div className="p-5">
             <h4 className="fw-bolder text-light text-center mb-3"
             style={{textShadow: "0 1px 5px #000"}}>
               Upgrade to <b style={{color:'#78c5fe'}}>Premium+</b>
             </h4>
   
             <h6 className="m-2 mb-4 text-light fw-light text-center">
        
                 Enjoy additional benefits, zero ads and the largest reply
                 prioritization.
             </h6>
             <div className=" text-end w3-3">
               <button className=" btn btn-outline-light rounded-5 w-100">
                 {" "}
                 Upgrade Now
               </button>
             </div>
           </div>
         </div>
        
           </div>
       );
   }
   
  



export default ExplorePremiumAd;


