
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import logo from '../assets/logo.svg';

const pages = [
  { label: 'Home', link: '#' },
  { label: 'Services', link: '#' },
  { label: 'My Orders', link: '#' },
  { label: 'My Account', link: '#' },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ background: 'linear-gradient(90deg, #fff 60%, #FFF3E6 100%)', boxShadow: 'none', p: 0, pt: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Varahi Logo" style={{ height: 60, marginRight: 12 }} />
          
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenu}>
              <MenuIcon sx={{ color: '#FF6600', fontSize: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleClose} sx={{ color: '#000' }}>
                  {page.label}
                </MenuItem>
              ))}
              <MenuItem onClick={handleClose}>
                <Button variant="contained" sx={{ background: '#FF6600', color: '#fff', borderRadius: 2, px: 3, fontWeight: 600 }}>
                  Book Now
                </Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {pages.map((page) => (
              <Button key={page.label} sx={{ color: '#000', fontWeight: 500, fontSize: 16, textTransform: 'none' }}>
                {page.label}
              </Button>
            ))}
            <Button variant="contained" sx={{ background: '#FF6600', color: '#fff', borderRadius: 2, px: 3, fontWeight: 600, ml: 2, boxShadow: 'none', '&:hover': { background: '#e65c00' } }}>
              Book Now
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
