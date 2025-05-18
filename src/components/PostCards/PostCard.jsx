import React, { useState, useRef } from 'react';
import { FaPen, FaImage, FaBold, FaVideo } from 'react-icons/fa';
import GirlCamera from '../../assets/images/GirlCamera.png'; // Adjust path


function PostCard() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const textareaRef = useRef(null);
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  // Handle textarea input
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Apply bold formatting
  const toggleBold = () => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.slice(start, end);

    if (selectedText) {
      const newContent =
        content.slice(0, start) +
        `<b>${selectedText}</b>` +
        content.slice(end);
      setContent(newContent);
      setTimeout(() => {
        textarea.selectionStart = start + 3;
        textarea.selectionEnd = end + 3;
      }, 0);
    } else {
      const cursorPos = textarea.selectionStart;
      const newContent =
        content.slice(0, cursorPos) +
        '<b></b>' +
        content.slice(cursorPos);
      setContent(newContent);
      setTimeout(() => {
        textarea.selectionStart = cursorPos + 3;
        textarea.selectionEnd = cursorPos + 3;
      }, 0);
    }
    textarea.focus();
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setImage(URL.createObjectURL(file));
    } else {
      alert('Image must be under 5MB');
    }
  };

  // Handle video selection
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 50 * 1024 * 1024) { // 50MB limit
      setVideo(URL.createObjectURL(file));
    } else {
      alert('Video must be under 50MB');
    }
  };

  // Trigger image input
  const triggerImageUpload = () => {
    imageInputRef.current.click();
  };

  // Trigger video input
  const triggerVideoUpload = () => {
    videoInputRef.current.click();
  };

  // Handle post submission
  const handlePost = () => {
    const postData = {
      content,
      image: image ? imageInputRef.current.files[0] : null,
      video: video ? videoInputRef.current.files[0] : null,
    };
    console.log('Posting:', postData);
    setContent('');
    setImage(null);
    setVideo(null);
    textareaRef.current.value = '';
  };

  return (
    <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
      <div className="d-flex align-items-start my-3 border-bottom">
        <img
          src={GirlCamera}
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right"
          style={{ width: '60px' }}
        />
        <div className="flex-grow-1">
          <textarea
            ref={textareaRef}
            className="form-control w3-border w3-round"
            rows="3"
            placeholder="What's on your mind?"
            style={{ resize: 'none' }}
            value={content}
            onChange={handleContentChange}
          ></textarea>

          {/* Toolbar */}
          <div className="toolbar mt-2">
            <button
              className="w3-button w3-round w3-light-grey"
              onClick={toggleBold}
              title="Bold"
              aria-label="Bold text"
            >
              <FaBold />
            </button>
            <button
              className="w3-button w3-round w3-light-grey"
              onClick={triggerImageUpload}
              title="Upload Image"
              aria-label="Upload image"
            >
              <FaImage />
            </button>
            <button
              className="w3-button w3-round w3-light-grey"
              onClick={triggerVideoUpload}
              title="Upload Video"
              aria-label="Upload video"
            >
              <FaVideo />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <input
              type="file"
              accept="video/*"
              ref={videoInputRef}
              style={{ display: 'none' }}
              onChange={handleVideoChange}
            />
          </div>

          {/* Previews */}
          {image && (
            <div className="preview-container mt-2">
              <img src={image} alt="Preview" className="preview-image w3-round" />
              <button
                className="w3-button w3-red w3-round w3-small"
                onClick={() => setImage(null)}
                aria-label="Remove image"
              >
                Remove
              </button>
            </div>
          )}
          {video && (
            <div className="preview-container mt-2">
              <video src={video} controls className="preview-video w3-round" />
              <button
                className="w3-button w3-red w3-round w3-small"
                onClick={() => setImage(null)}
                aria-label="Remove video"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w3-right-align mb-2">
        <button className="btn btn-dark" onClick={handlePost}>
          <FaPen className="me-2" />
          Post
        </button>
      </div>
    </div>
  );
}

export default PostCard;