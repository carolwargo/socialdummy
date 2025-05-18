import * as React from "react";

const UserNav = () => {
  return (
    <div>
<style>
  {`
    .nav-scroll-wrapper {
      max-width: 100vw;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    .nav-scroll-wrapper::-webkit-scrollbar {
      height: 3px;
    }

    .nav-scroll-wrapper::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    .nav-tabs {
      flex-wrap: nowrap;
    }

    
  .nav-tabs .nav-link {
        white-space: nowrap;
      flex-shrink: 0;
    border: none;
    border-bottom: 3px solid transparent;
    color: #333;
    font-weight: 500;
  }
  
  .nav-tabs .nav-link.active {
    border-bottom: 3px solid  #0d6efd; /* Bootstrap primary color */
    color: #0d6efd;
  }

    .nav-tabs .nav-link {
      margin-right: 1rem;
      font-size: 1rem;
    }

    /* Medium screens (≤768px) */
    @media (max-width: 768px) {
      .nav-tabs .nav-link {
        margin-right: 0.25rem;
        font-size: 0.9rem;
      }
    }

    /* Small screens (≤576px) */
    @media (max-width: 576px) {
      .nav-tabs .nav-link {
        margin-right: 0rem;
        font-size: 0.8rem;
      }
    }
  `}
</style>

      <nav className="nav-scroll-wrapper">
        <div className="container-fluid">
          <ul className="nav nav-tabs mb-0" style={{ borderBottom: "none" }}>
            <li className="nav-item">
              <button className="nav-link active">Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Explore</button>
            </li>
        
            <li className="nav-item">
              <button className="nav-link">Following</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">For You</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Profile</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Messages</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default UserNav;
