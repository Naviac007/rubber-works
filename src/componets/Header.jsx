import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AppLogo from '../static/Logo.png';
const applogo =  require('../static/Logo.png')

const pages = ['Products', 'Pricing', 'Contact Us'];
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{bgcolor:"#f6b000"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
                {/* <img src={String(applogo)} alt="logo"/> */}
                <Tooltip title="Home">
                   <a href='/'>
                        <Avatar  sx={{  width: 56, height: 56  }} alt="Rubber Works" src={String(applogo)}  />
                    </a>
                </Tooltip>
                
            </Box>
            <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#a95154',
                    textDecoration: 'none',
                    }}
                >
                    RASHMI RUBBER
                </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }} >
                {/* <img src={String(applogo)} alt="logo"/> */}
                <Tooltip title="Home">
                   <a href='/'>
                        <Avatar  sx={{  width: 56, height: 56  }} alt="Rubber Works" src={String(applogo)}  />
                    </a>
                </Tooltip>
            </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
            {pages.map((page) => (
              <a href={`#${page}`} style={{textDecoration:"none"}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              </a>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header