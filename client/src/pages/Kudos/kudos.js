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

class Kudos extends Component {
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
    return (
      <div>
        <Container>
          <Box m={2} pt={3}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h2 class="ui header"> Select an E-Card</h2>
                <ImageList
                  sx={{ width: 500, height: 550 }}
                  cols={3}
                  rowHeight={164}
                  variant="quilted"
                >
                  {this.itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=16&h=16&fit=auto&auto=format`}
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => this.imageClick(item.title, item.img)}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
              <Grid item xs={6}>
                <h3 class="ui header"> Preview</h3>

                <Box
                  sx={{
                    // marginTop: 5,
                    width: 450,
                    height: 450,
                    border: "1px  grey",
                  }}
                >
                  <img
                    src={this.state.selectimage}
                    style={{ width: 450, height: 550 }}
                  ></img>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container>
          <Box m={2} pt={3}>
            <Grid container spacing={2}>
              <Grid item xs={0}></Grid>
              <h2 class="ui header"> Tell us why ?</h2>
            </Grid>
            <Box m={0} pt={3}>
              <Stack spacing={3} direction="row">
                <FormControl>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Select a reason
                  </InputLabel>
                  <NativeSelect
                    defaultValue={10}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>Agile</option>
                    <option value={20}>Challenging Perspective</option>
                    <option value={30}>Client centricity</option>
                    <option value={40}>Leadership</option>
                  </NativeSelect>
                </FormControl>
                <TextField
                  id="standard-basic"
                  label="Add Reciepent"
                  variant="standard"
                />
              </Stack>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box m={2} pt={3}>
            <Grid container spacing={2}>
              <Grid item xs={0}></Grid>
            </Grid>
            <Box m={0} pt={3}>
              <Stack spacing={3} direction="row">
                <Button color="success" variant="contained" size="large">
                  Send
                </Button>
                <Button color="info" variant="outlined" size="large">
                  Edit
                </Button>
                <Button color="error" variant="outlined" size="large">
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </div>
    );
  }
}

export default Kudos;
