import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import arena_logo from "../assets/logo/arena.svg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Avatar from "@mui/material/Avatar";

// import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const NavBar = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  // helper to show links on Navbar if user is authenticated
  const showLinks = () => {
    return (
      <>
        <section className="rightToolbar">
          <IconButton>
            <Link to="/createevent" className="ui appbar link">
              <AddCircleOutlineIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Create Event</div>
            </Link>
          </IconButton>

          <IconButton justify="flex-end">
            <Link to="/notification" className="ui appbar link">
              <NotificationsNoneIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext"> Notification</div>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/createevent" className="ui appbar link">
              <AccountBalanceIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Points</div>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/login" className="ui appbar link">
              <LoginIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Login</div>
            </Link>
          </IconButton>
          <IconButton
            disableRipple={true}
            color="primary"
            aria-label="open tool drawer"
          >
            <Link to="/register" className="ui appbar link">
              <AppRegistrationIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Register</div>
            </Link>
          </IconButton>

          <IconButton>
            <Avatar {...stringAvatar("Steve Jobs")} />
          </IconButton>
        </section>
      </>
    );
    // }
  };

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className="ui appbar">
        <Toolbar>
          <IconButton>
            <img src={arena_logo} alt="logo" className="ui appbar logo" />
          </IconButton>
          <IconButton>
            <Link to="/" className="ui appbar link">
              <HomeIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Home</div>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/about" className="ui appbar link">
              <LeaderboardIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">LeaderBoard</div>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/helpcenter" className="ui appbar link">
              <HelpCenterIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Help Center</div>
            </Link>
          </IconButton>

          {showLinks()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
