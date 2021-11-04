import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import arena_logo from "../assets/logo/a9.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KudosIcon from "@mui/icons-material/Celebration";
import MarketplaceIcon from "@mui/icons-material/BusinessCenter";

// import sachin image

import sj from "../assets/images/profile/sj.png";

import Avatar from "react-avatar";

// import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import QuickProfile from "../../src/pages/Home/quickprofile";

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
          {/* <IconButton>
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
          </IconButton> */}

          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                {/* <Avatar {...stringAvatar("Steve Jobs")} /> */}
                <Avatar
                  twitterHandle="sitebase"
                  name="Sachin Jadhav"
                  size="45"
                  round="30px"
                  src={sj}
                />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </section>
      </>
    );
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // quick profile on sidebar
  const list = (anchor) => <QuickProfile />;

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
          <IconButton>
            <Link to="/kudos" className="ui appbar link">
              <KudosIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Kudos</div>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/helpcenter" className="ui appbar link">
              <MarketplaceIcon style={{ height: 30, width: 30 }} />
              <div className="appbartext">Marketplace</div>
            </Link>
          </IconButton>

          {showLinks()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
