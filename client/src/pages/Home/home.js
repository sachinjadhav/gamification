/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import {
  Header,
  Message,
  Icon,
  Grid,
  Divider,
  Container,
  Card,
  Image,
  Feed,
  Statistic,
  Dropdown,
} from "semantic-ui-react";

import SearchBar from "./searchbar";
import axios from "axios";
// import _ from "lodash";
import EventCards from "./eventcards";

// css
import "./home.css";

// images -- home
import home1 from "../../assets/images/home/home_1.png";
import home2 from "../../assets/images/home/home_2.png";
import home4 from "../../assets/images/home/home_4.png";

// images kudos
import inspiration1 from "../../assets/images/kudos/inspiration/inspiration1.png";
import inspiration2 from "../../assets/images/kudos/inspiration/inspiration2.png";
import team1 from "../../assets/images/kudos/teams/team1.png";

// static data import
import homeeventsoptions from "../Home/staticData";

class Home extends Component {
  images = [home1, home2];
  constructor() {
    super();
    this.state = {
      searcharray: {
        Events: {
          name: "Events",
          results: [],
        },
        Users: {
          name: "Users",
          results: [],
        },
      },
      eventcardsData: "",
    };
  }

  componentDidMount() {
    this.getUsers();
    this.getEvents();
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

  render() {
    return (
      <>
        <div>
          <Message
            className="message-container"
            style={{
              backgroundImage: `url(${
                this.images[Math.floor(Math.random() * this.images.length)]
              })`,
            }}
          >
            <Container text>
              <Header
                className="home_title"
                size="large"
                style={{ fontSize: "50px", color: "white", textAlign: "left" }}
              >
                Arena
              </Header>
              <Header
                className="home_subtitle"
                size="medium"
                style={{ color: "white", textAlign: "left" }}
              >
                A gamification platform
              </Header>
              <Divider hidden></Divider>

              <SearchBar searcharray={this.state.searcharray} />

              <div class="ui inverted statistic">
                <div>
                  <Statistic.Group>
                    <Statistic>
                      <Statistic.Value>540</Statistic.Value>
                      <Statistic.Label>Events</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>31,200</Statistic.Value>
                      <Statistic.Label>Participants</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>24</Statistic.Value>
                      <Statistic.Label>Locations</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </div>
              </div>
            </Container>
          </Message>
        </div>
        <Divider hidden></Divider>
        <searchevents></searchevents>
        <Container>
          <h2 class="ui header">
            Events
            <Dropdown
              inline
              header=""
              options={homeeventsoptions}
              defaultValue={homeeventsoptions[0].value}
              style={{ marginLeft: 10 }}
            />
          </h2>
          <EventCards data={this.state.searcharray.Events} />
        </Container>
        <Divider hidden></Divider>
        <Divider hidden></Divider>

        <Divider hidden></Divider>
        <Container>
          <h2 class="ui header">Kudos Wall</h2>

          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Elliot Fu</Feed.User> added you as a friend
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />4 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Helen Troy</a> added <a>2 new illustrations</a>
                  <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                  <img src={team1} />
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />1 Like
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              <Feed.Content>
                <Feed.Summary
                  date="2 Days Ago"
                  user="Jenny Hess"
                  content="add you as a friend"
                />
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />8 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  Ours is a life of constant reruns. We're always circling back
                  to where we'd we started, then starting all over again. Even
                  if we don't run extra laps that day, we surely will come back
                  for more of the same another day soon.
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />5 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                  <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                  <a>
                    <img src={inspiration2} />
                  </a>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
                    41 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Container>
      </>
    );
  }
}

export default Home;
