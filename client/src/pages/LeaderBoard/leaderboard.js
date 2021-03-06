/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";
import { Grid, Divider, Card, Image, Search } from "semantic-ui-react";
import { InputLabel } from "@mui/material";

import UserCards from "./userList";
import SearchBar from "../Home/searchbar";
import _ from "lodash";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searcharray: {
        Users: {
          name: "Users",
          results: [],
        },
      },
      value: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("/api/users")
      .then((usersres) => {
        if (usersres.data) {
          this.state.searcharray.Users.results = usersres.data;
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
                  {/* <Search
                    placeholder="Search Events..."
                    onSearchChange={this.handleSearchChange}
                    className="eventsearch"
                    input={{ fluid: true }}
                    icon="search"
                    // value={this.state.value}
                  /> */}
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
                <InputLabel>Rank</InputLabel>
                <InputLabel>Location</InputLabel>
                <InputLabel>Badge Name</InputLabel>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <h2 class="ui header">LeaderBoard</h2>

              <UserCards data={this.state.searcharray.Users} />
            </Grid.Column>
            <Grid.Column width={5}>
              <h2 class="ui header">User Information</h2>

              <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default LeaderBoard;
