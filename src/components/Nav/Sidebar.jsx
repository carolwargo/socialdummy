import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  border-right: 1px solid #e6ecf0;
  padding:  0;
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6ecf0;
  }
`;

const Menu = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
    <MenuContainer>
      <MenuItem
        onClick={() => handleItemClick('Home')}
        style={{ fontWeight: activeItem === 'Home' ? 'bold' : 'normal' }}
      >
        Home
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick('Explore')}
        style={{ fontWeight: activeItem === 'Explore' ? 'bold' : 'normal' }}
      >
        Explore
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick(' Notifications')}
        style={{ fontWeight: activeItem === ' Notifications' ? 'bold' : 'normal' }}
      >
        Notifications
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick('Messages')}
        style={{ fontWeight: activeItem === 'Messages' ? 'bold' : 'normal' }}
      >
        Messages
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick('Bookmarks')}
        style={{ fontWeight: activeItem === 'Bookmarks' ? 'bold' : 'normal' }}
      >
        Bookmarks
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick('Lists')}
        style={{ fontWeight: activeItem === 'Lists' ? 'bold' : 'normal' }}
      >
        Lists
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick('Profile')}
        style={{ fontWeight: activeItem === 'Profile' ? 'bold' : 'normal' }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => handleItemClick('More')}
        style={{ fontWeight: activeItem === 'More' ? 'bold' : 'normal' }}
      >
        More
      </MenuItem>
    </MenuContainer>
    </div>
  
  );
};

export default Menu;