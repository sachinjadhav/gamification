/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Avatar from "react-avatar";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Divider, Segment, Statistic } from "semantic-ui-react";

import profilebanner from "../../assets/images/profile/profilebanner.svg";
import sj from "../../assets/images/profile/sj.png";

//badges
import badge1 from "../../assets/images/badges/badge1.png";
import points1 from "../../assets/images/badges/points1.png";
import tempbadges from "../../assets/images/badges/tempbadges.png";

import { width } from "@mui/system";

class QuickProfile extends Component {
  render() {
    return (
      <div>
        <Box sx={{ width: 400, marginTop: -5 }} role="presentation">
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <img src={profilebanner} />

              <Avatar
                twitterHandle="sitebase"
                name="Sachin Jadhav"
                size="140"
                round="80px"
                src={sj}
                style={{ marginTop: -95 }}
              />
              <h3 class="ui header"> Sachin Jadhav</h3>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Box style={{ margin: 10 }}>
          <h3 class="ui header"> Kudos Points</h3>
          <item>
            <img
              src={points1}
              //   style={{ height: 100, width: 100, textAlign: "center " }}
              style={{
                // textAlign: "center",
                marginLeft: 100,
                marginRight: "auto",
                marginTop: -50,
                height: 35,
                width: 35,
                display: "block",
              }}
            />
          </item>
          <Statistic color="grey">
            <Statistic.Value>1,000</Statistic.Value>
            <Statistic.Label>Points</Statistic.Label>
          </Statistic>
          <Divider />

          <h3 class="ui header"> My Badges </h3>
          <item>
            <img
              src={badge1}
              //   style={{ height: 100, width: 100, textAlign: "center " }}
              style={{
                // textAlign: "center",
                marginLeft: 100,
                marginRight: "auto",
                marginTop: -50,
                height: 35,
                width: 35,
                display: "block",
              }}
            />
          </item>
          <img
            src={tempbadges}
            style={{ height: 60, width: 250, display: "block", marginTop: 20 }}
          ></img>
          <Link component="button" variant="body2" style={{ marginTop: 20 }}>
            See all your badges
          </Link>
          <Divider />

          <h3 class="ui header"> My Dashboard</h3>
          <Link component="button" variant="body2">
            See details
          </Link>
          <Divider />
        </Box>
      </div>
    );
  }
}

export default QuickProfile;
