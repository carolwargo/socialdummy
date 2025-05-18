// /src/pages/Home.jsx  

import Newsfeed from "../../components/Newsfeed/Newsfeed";
import Explore from "../../components/Explore/Explore";
import PostModal from "../../components/Modals/PostModal"; 

export default function UserHome() {
    return (
      <div>
      <style>{`
      .overflow-column {
  height: 100vh;         
  overflow-y: auto;       

}
      `}
      </style>
    <div className="">
    <div className="row">
  <div className="col-sm-12 col-md-8 col-lg-8"
  style={{borderRight: "1px solid #dee2e6"}}>
    <Newsfeed />
  </div>
  <div className="col-sm-12 col-md-4 col-lg-4 w3-hide-small w3-hide-medium">
    <Explore />
  </div>
</div>
    </div>
    <PostModal /> 
    </div>
  );
}


