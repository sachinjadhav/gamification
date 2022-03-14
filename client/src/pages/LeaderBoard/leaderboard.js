/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";
import { Grid, Divider, Card, Image, Search } from "semantic-ui-react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Container,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

import EventCards from "./eventList";
import SearchBar from "../Home/searchbar";
import _ from "lodash";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searcharray: {
        Events: {
          name: "Events",
          results: [],
        },
      },
      value: "",
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    axios
      .get("/api/events")
      .then((eventsres) => {
        if (eventsres.data) {
          this.state.searcharray.Events.results = eventsres.data;
          this.setState({ eventcardsData: "render" });
        }
      })
      .catch((err) => console.log(err));
  };

  handleSearchChange = (e) => {
    console.log(this.props.data);
    this.setState({ value: e.target.value });
    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.name);

      const filteredResults = _.reduce(
        this.props.searcharray,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {}
      );

      console.log(filteredResults);
      // this.state.searcharray.Events.results = filteredResults;
    }, 10);
  };

  render() {
    return (
      <>
        <div>
          <Divider></Divider>
          <div>
            <Grid celled="internally">
              <Grid.Row>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column width={8}>
                  <Search
                    placeholder="Search Events..."
                    onSearchChange={this.handleSearchChange}
                    className="eventsearch"
                    input={{ fluid: true }}
                    icon="search"
                    // value={this.state.value}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <h2 class="ui header">Filters</h2>

              <div>
                <InputLabel>Tags</InputLabel>
                <InputLabel>Location</InputLabel>
                <InputLabel>Event Start Date</InputLabel>
                <InputLabel>Event End Date</InputLabel>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <h2 class="ui header">All Events</h2>

              <EventCards data={this.state.searcharray.Events} />
            </Grid.Column>
            <Grid.Column width={5}>
              <h2 class="ui header">Event Details</h2>

              <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default LeaderBoard;
