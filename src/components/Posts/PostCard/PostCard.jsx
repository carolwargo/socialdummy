import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="post-card">
    <Link to={`/profile/${post.user._id}`}>{post.user.username}</Link>
    <p>{post.content}</p>
    {post.mediaUrls.map(url => (
      <img key={url} src={url} alt="media" style={{ maxWidth: '100%' }} />
    ))}
    <button>Likes: {post.likes.length}</button>
  </div>
);

export default PostCard;