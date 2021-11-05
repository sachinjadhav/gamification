import React, { Component } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { Container } from "semantic-ui-react";

// images import
import placeholder from "../../assets/images/kudos/ecards/placeholder.png";
import starinmaking from "../../assets/images/kudos/ecards/a_star_in_making.png";
import congrats from "../../assets/images/kudos/ecards/congrats.png";
import great_client_focus from "../../assets/images/kudos/ecards/great_client_focus.png";
import great_Innovation from "../../assets/images/kudos/ecards/great_Innovation.png";
import team_collaboration from "../../assets/images/kudos/ecards/team_collaboration.png";
import thank_you_for_helping_me_to_grow from "../../assets/images/kudos/ecards/thank_you_for_helping_me_to_grow.png";
import thanks from "../../assets/images/kudos/ecards/thanks.png";
import well_done from "../../assets/images/kudos/ecards/well_done.png";
import what_a_great_advice from "../../assets/images/kudos/ecards/what_a_great_advice.png";
import you_have_hit_the_ground_running from "../../assets/images/kudos/ecards/you_have_hit_the_ground_running.png";
import goal from "../../assets/images/kudos/ecards/goal.png";
import challenge from "../../assets/images/kudos/ecards/challenge.png";
import competition from "../../assets/images/kudos/ecards/competition.png";
import teamwork from "../../assets/images/kudos/ecards/teamwork.png";

class Marketplace extends Component {
  constructor() {
    super();
    this.state = {
      selectimage: placeholder,
    };
  }

  itemData = [
    {
      img: starinmaking,
      title: "Star in Making",
    },
    {
      img: congrats,
      title: "Congrats",
    },
    {
      img: great_client_focus,
      title: "Great Client Focus",
    },
    {
      img: thanks,
      title: "Thanks",
    },
    {
      img: well_done,
      title: "Well Done",
    },
    {
      img: great_Innovation,
      title: "Great Innovation",
    },
    {
      img: team_collaboration,
      title: "Team Collaboration",
    },
    {
      img: thank_you_for_helping_me_to_grow,
      title: "Thank you for helping me to grow",
    },
    {
      img: what_a_great_advice,
      title: "What a great advice",
    },
    {
      img: you_have_hit_the_ground_running,
      title: "You've hit the ground running",
    },
    {
      img: goal,
      title: "Goal",
    },
    {
      img: competition,
      title: "competition",
    },
    {
      img: teamwork,
      title: "teamwork",
    },
    {
      img: challenge,
      title: "challenge",
    },
  ];

  imageClick = (title, image) => this.setState({ selectimage: image });

  render() {
    return <></>;
  }
}

export default Marketplace;
