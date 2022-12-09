import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history=useHistory();
  const Explore=()=>{history.push('/')}
  const Login=()=>{history.push('/login')}
  const Register=()=>{history.push('/register')}
  let username=localStorage.getItem('username');

  const logout=()=>{
    localStorage.clear();
    window.location.reload() 
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      <Box>{children}</Box>
      { hasHiddenAuthButtons ?
      <Button
        onClick={Explore}
        className="explore-button"
        startIcon={<ArrowBackIcon />}
        variant="text"
      >
          Back to explore
      </Button>:
      (username?
      <Box>
        <Stack direction="row" spacing={2}>
        <Avatar src="avatar.png" alt={username}></Avatar>
        <Typography className='userStyle' variant="h6" gutterBottom>
        {username}
        </Typography>
        <Button onClick={logout}>
          <Link className="link" to="/">
            LOGOUT
          </Link>
        </Button>
        </Stack>
      </Box>:
      <Box>
        <Button onClick={Login} >
          LOGIN
        </Button>
        <Button onClick={Register} variant='contained'>
          REGISTER
        </Button>
      </Box>)}
    </Box>
  );
};

export default Header;
