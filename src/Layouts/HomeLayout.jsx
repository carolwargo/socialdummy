// ./src/Layouts/HomeLayout.jsx
import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Box, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Avatar, IconButton,
  AppBar, Toolbar, Typography, Menu, MenuItem 
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import GirlCamera from '../assets/images/GirlCamera.png';
import { MdVerified } from 'react-icons/md';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { menuItems, drawerWidth } from '../constants/MenuItems'; // Import constants

export default function HomeLayout() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const toggleDrawer = (openState) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(openState);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    console.log("User logged out");
  };

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        px: 3,
        pt: 0,
        ml: 3,
      }}
      role="presentation"
      onClick={!isLargeScreen ? toggleDrawer(false) : undefined}
      onKeyDown={!isLargeScreen ? toggleDrawer(false) : undefined}
    >
      {isLargeScreen && (
        <Typography sx={{ fontSize: '1.5rem', px: 2, py: 1, mt: 3 }} noWrap component="div">
          LOGO
        </Typography>
      )}
      <List sx={{ width: '100%' }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              <ListItemIcon>
                <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem' }}></i>
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
        <button className="btn btn-dark w-100 rounded-5 mt-4"><b>Post</b></button>
      </Box>

      <Box sx={{ mt: 'auto', mb: 3 }}>
        <hr className='mb-4' />
        <Box sx={{ display: 'flex', alignItems: 'end', gap: 2, mb: 3, mt: 2 }}>
          <Avatar
            alt="Profile Picture"
            src={GirlCamera}
            sx={{
              width: 46,
              height: 46,
              border: '3px solid rgb(253, 253, 253)',
              boxShadow: 3,
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontSize: '.9rem' }}>
              User Name <span>
                <MdVerified style={{ color: "#0d6efd", fontSize: "1rem" }} />
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @username
            </Typography>
          </Box>
          <IconButton onClick={handleMenuClick} size="large">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout} sx={{ fontSize: '.9rem' }}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      {!isLargeScreen && (
        <AppBar position="fixed" color="default" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <Avatar alt="Profile Picture" src={GirlCamera} sx={{ width: 40, height: 40 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={isLargeScreen ? 'permanent' : 'temporary'}
        open={isLargeScreen ? true : drawerOpen}
        onClose={toggleDrawer(false)}
        anchor="left"
        sx={{
          width: isLargeScreen ? drawerWidth : 'auto',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflowY: 'auto',
            pt: isLargeScreen ? 0 : '64px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        
     
          width: isLargeScreen ? `calc(100% - ${drawerWidth}px)` : '100%',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}