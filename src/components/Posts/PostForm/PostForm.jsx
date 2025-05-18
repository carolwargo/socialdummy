import React, { useState } from "react";
import { Link } from "react-router-dom";
import GirlCamera from "../../../assets/images/GirlCamera.png";

const PostForm = () => {
  const commentsData = [
    {
      id: 1,
      author: "Jane Doe",
      text: "Great post!",
      avatar: "https://i.pravatar.cc/40?img=1",
      replies: [
        {
          id: 11,
          author: "John Smith",
          text: "I agree!",
          avatar: "https://i.pravatar.cc/40?img=2",
        },
      ],
    },
    {
      id: 2,
      author: "Alice",
      text: "Thanks for sharing!",
      avatar: "https://i.pravatar.cc/40?img=3",
      replies: [],
    },
  ];
  

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="mt-3">
      <style>{`
        .card {
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .post-wrapper {
          padding:.25rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .post-img-title {
          display: flex;
          align-items: center;
        }

        .card-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .post-text {
          display: flex;
          flex-direction: column;
        }

        .post-date {
          font-size: 12px;
          margin-top: 0;
        }

        .post-text-wrapper {
          overflow: hidden;
          transition: max-height 0.5s ease, opacity 0.5s ease;
        }

        .post-text-collapsed {
          max-height: 80px;
          opacity: 0.8;
        }

        .post-text-expanded {
          max-height: 1000px;
          opacity: 1;
        }

        .likes-shares {
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
          font-size: 16px;
          width: 100%;
        }

.post-button-group {
margin: 0px 1rem;
font-size:1.1rem;
}

        .black-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className="card">
        <div className="post-wrapper">
          {/* Profile Image + Title */}
          <div className="post-img-title">
            <img src={GirlCamera} alt="Profile" className="card-img" />
            <div className="post-text">
              <p className="post-title mt-2 fw-bold">TITLE (EVENT)</p>
              <p className="post-date text-muted">April 15, 2025</p>
            </div>
          </div>

          {/* Post Content */}
          <div className={`post-text-wrapper ${showMore ? "post-text-expanded" : "post-text-collapsed"}`}>
            <p className="small m-0 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur minima harum recusandae
              perspiciatis obcaecati, ipsa laborum vero quas quis. Autem cumque nulla quasi sequi cum ad!
              Dolores, voluptas quasi.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="text-start mt-2">
            <button onClick={toggleShowMore} className="btn btn-link p-0 small">
              View {showMore ? "Less" : "More"}
            </button>
          </div>

          {/* Post Image */}
          <img src={GirlCamera} alt="Post" className="post-image w-100 mt-3" />

          {/* Likes and Shares */}
          <div className="likes-shares">
            <span>Likes <b className="text-danger">12</b></span>
            <span>Shares <b className="text-danger">12</b></span>
          </div>

          {/* Comments Section */}
          <div className="comments-section mt-4 w-100">
  <h6>Comments</h6>
  {commentsData.map((comment) => (
    <div key={comment.id} className="mb-3 d-flex">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="rounded-circle me-2"
        style={{ width: "30px", height: "30px", objectFit: "cover" }}
      />
      <div>
        <p className="mb-1">
          <strong>{comment.author}</strong>: {comment.text}
        </p>
        {comment.replies.length > 0 && (
          <div className="ms-4">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="d-flex align-items-start mb-1">
                <img
                  src={reply.avatar}
                  alt={reply.author}
                  className="rounded-circle me-2"
                  style={{ width: "25px", height: "25px", objectFit: "cover" }}
                />
                <p className="mb-0">
                  <small><strong>{reply.author}</strong>: {reply.text}</small>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ))}
</div>

          <div  className="text-center border-top">
            <p className="text-center mt-3">
          <span className="post-button-group"> <i className=" bi-chat"></i> 2</span> 
            <span className="post-button-group"> <i className=" bi-repeat"></i> 2</span>
            <span className="post-button-group"> <i className=" bi-heart"></i> 3</span> 
            <span className="post-button-group"> <i className=" bi-bookmark"></i></span>
            <span className="post-button-group"> <i className=" bi-upload"></i></span> 
          </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostForm;
