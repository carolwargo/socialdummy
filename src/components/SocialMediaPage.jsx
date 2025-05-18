import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
import '../styles.css';

// Placeholder images (replace with actual assets in src/assets/)
const images = {
  avatar2: '/w3images/avatar2.png',
  avatar3: '/w3images/avatar3.png',
  avatar5: '/w3images/avatar5.png',
  avatar6: '/w3images/avatar6.png',
  lights: '/w3images/lights.jpg',
  nature: '/w3images/nature.jpg',
  mountains: '/w3images/mountains.jpg',
  forest: '/w3images/forest.jpg',
  snow: '/w3images/snow.jpg',
};

const SocialMediaPage = () => {
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [accordionState, setAccordionState] = useState({
    Demo1: false,
    Demo2: false,
    Demo3: false,
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, postsRes, notificationsRes] = await Promise.all([
          axios.get('/api/profile'),
          axios.get('/api/posts'),
          axios.get('/api/notifications'),
        ]);
        setProfile(profileRes.data);
        setPosts(postsRes.data);
        setNotifications(notificationsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Handle new post submission
  const handlePostSubmit = async () => {
    if (!newPost.trim()) return;
    try {
      const response = await axios.post('/api/posts', {
        author: profile.name,
        avatar: images.avatar2,
        time: 'Just now',
        content: newPost,
        images: [],
        likes: 0,
        comments: [],
      });
      setPosts([response.data, ...posts]);
      setNewPost('');
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  // Handle like button
  const handleLike = async (postId) => {
    try {
      const post = posts.find((p) => p.id === postId);
      await axios.patch(`/api/posts/${postId}`, {
        likes: post.likes + 1,
      });
      setPosts(posts.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p)));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // Toggle accordion sections
  const toggleAccordion = (id) => {
    setAccordionState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle mobile nav
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="w3-theme-l5">
      <div className="body">
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a
              className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
              href="#!"
              onClick={toggleNav}
            >
              <i className="fa fa-bars"></i>
            </a>
            <a href="#!" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
              <i className="fa fa-home w3-margin-right"></i>Logo
            </a>
            <a href="#!" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
              <i className="fa fa-globe"></i>
            </a>
            <a href="#!" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
              <i className="fa fa-user"></i>
            </a>
            <a href="#!" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
              <i className="fa fa-envelope"></i>
            </a>
            <Dropdown className="w3-hide-small">
              <Dropdown.Toggle className="w3-button w3-padding-large" title="Notifications">
                <i className="fa fa-bell"></i>
                <span className="w3-badge w3-right w3-small w3-green">{notifications.length}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                {notifications.map((notif) => (
                  <Dropdown.Item key={notif.id} href="#!">
                    {notif.content}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <a href="#!" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
              <img src={images.avatar2} className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
            </a>
          </div>
        </div>

        {/* Navbar on small screens */}
        <div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-large ${isNavOpen ? '' : 'w3-hide w3-hide-large w3-hide-medium'}`}>
          <a href="#!" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
          <a href="#!" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
          <a href="#!" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
          <a href="#!" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>

        {/* Page Container */}
        <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center">
                    <img src={profile.avatar || images.avatar3} className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
                  </p>
                  <hr />
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> {profile.occupation || 'Designer, UI'}
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> {profile.location || 'London, UK'}
                  </p>
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> {profile.birthday || 'April 1, 1988'}
                  </p>
                </div>
              </div>
              <br />

              {/* Accordion */}
              <div className="w3-card w3-round">
                <div className="w3-white">
                  <Button
                    onClick={() => toggleAccordion('Demo1')}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
                  </Button>
                  <div id="Demo1" className={`w3-container ${accordionState.Demo1 ? '' : 'w3-hide'}`}>
                    <p>Some text..</p>
                  </div>
                  <Button
                    onClick={() => toggleAccordion('Demo2')}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
                  </Button>
                  <div id="Demo2" className={`w3-container ${accordionState.Demo2 ? '' : 'w3-hide'}`}>
                    <p>Some other text..</p>
                  </div>
                  <Button
                    onClick={() => toggleAccordion('Demo3')}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
                  </Button>
                  <div id="Demo3" className={`w3-container ${accordionState.Demo3 ? '' : 'w3-hide'}`}>
                    <div className="w3-row-padding">
                      <br />
                      {[images.lights, images.nature, images.mountains, images.forest, images.nature, images.snow].map((src, index) => (
                        <div key={index} className="w3-half">
                          <img src={src} style={{ width: '100%' }} className="w3-margin-bottom" alt="Photo" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {/* Interests */}
              <div className="w3-card w3-round w3-white w3-hide-small">
                <div className="w3-container">
                  <p>Interests</p>
                  <p>
                    {['News', 'W3Schools', 'Labels', 'Games', 'Friends', 'Games', 'Friends', 'Food', 'Design', 'Art', 'Photos'].map((interest, index) => (
                      <span key={index} className={`w3-tag w3-small w3-theme-d${index % 5 + 1}`}>
                        {interest}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <br />

              {/* Alert Box */}
              {showAlert && (
                <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                  <span
                    onClick={() => setShowAlert(false)}
                    className="w3-button w3-theme-l3 w3-display-topright"
                  >
                    <i className="fa fa-remove"></i>
                  </span>
                  <p>
                    <strong>Hey!</strong>
                  </p>
                  <p>People are looking at your profile. Find out who.</p>
                </div>
              )}
            </div>

            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <h6 className="w3-opacity">Social Media template by w3.css</h6>
                      <input
                        type="text"
                        className="w3-border w3-padding w3-block"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's on your mind?"
                      />
                      <Button
                        onClick={handlePostSubmit}
                        className="w3-button w3-theme w3-margin-top"
                      >
                        <i className="fa fa-pencil"></i> Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {posts.map((post) => (
                <div key={post.id} className="w3-container w3-card w3-white w3-round w3-margin">
                  <br />
                  <img
                    src={post.avatar}
                    alt="Avatar"
                    className="w3-left w3-circle w3-margin-right"
                    style={{ width: '60px' }}
                  />
                  <span className="w3-right w3-opacity">{post.time}</span>
                  <h4>{post.author}</h4>
                  <br />
                  <hr className="w3-clear" />
                  <p>{post.content}</p>
                  {post.images.length > 0 && (
                    <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                      {post.images.map((img, index) => (
                        <div key={index} className="w3-half">
                          <img
                            src={img}
                            style={{ width: '100%' }}
                            alt="Post"
                            className="w3-margin-bottom"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <Button
                    onClick={() => handleLike(post.id)}
                    className="w3-button w3-theme-d1 w3-margin-bottom"
                  >
                    <i className="fa fa-thumbs-up"></i> Like ({post.likes})
                  </Button>
                  <Button className="w3-button w3-theme-d2 w3-margin-bottom">
                    <i className="fa fa-comment"></i> Comment
                  </Button>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="w3-col m2">
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Upcoming Events:</p>
                  <img src={images.forest} alt="Forest" style={{ width: '100%' }} />
                  <p>
                    <strong>Holiday</strong>
                  </p>
                  <p>Friday 15:00</p>
                  <p>
                    <Button className="w3-button w3-block w3-theme-l4">Info</Button>
                  </p>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Friend Request</p>
                  <img src={images.avatar6} alt="Avatar" style={{ width: '50%' }} />
                  <br />
                  <span>Jane Doe</span>
                  <div className="w3-row w3-opacity">
                    <div className="w3-half">
                      <Button className="w3-button w3-block w3-green w3-section" title="Accept">
                        <i className="fa fa-check"></i>
                      </Button>
                    </div>
                    <div className="w3-half">
                      <Button className="w3-button w3-block w3-red w3-section" title="Decline">
                        <i className="fa fa-remove"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
                <p>ADS</p>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p>
                  <i className="fa fa-bug w3-xxlarge"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Footer */}
        <footer className="w3-container w3-theme-d3 w3-padding-16">
          <h5>Footer</h5>
        </footer>
        <footer className="w3-container w3-theme-d5">
          <p>
            Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noreferrer">w3.css</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SocialMediaPage;