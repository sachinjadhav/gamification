import React from "react";
import {
  Header,
  Message,
  Button,
  Icon,
  Input,
  Grid,
  // Segment,
  Divider,
  Container,
  Card,
  Image,
} from "semantic-ui-react";
import { useEffect } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Paper } from "@mui/material";
import map from "lodash/map";
import range from "lodash/range";

import SearchBar from "./searchbar";

import "./home.css";

import home1 from "../../assets/images/home/home_1.png";
import home2 from "../../assets/images/home/home_2.png";
import home4 from "../../assets/images/home/home_4.png";

import trending_image1 from "../../assets/images/trending/event1.png";
import trending_image2 from "../../assets/images/trending/event2.png";
import trending_image3 from "../../assets/images/trending/event3.png";
import trending_image4 from "../../assets/images/trending/event4.png";

export const Home = () => {
  const images = [
    home1,
    home2,
    // home3,
    home4,
    // home5,
    // home6,
    // home7,
    // home8,
    // home9,
  ];

  const BoxContainer = () => {
    return (
      <div style={{ height: "260px", width: "250px", margin: "16px" }}>
        {/* <Paper style={{ height: "100%", width: "250px" }}>Hello</Paper> */}
        <div class="ui raised link card">
          <Card>
            <Image src={trending_image1} wrapped ui={false} />
            <Card.Content>
              <Card.Header>SJ</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2021-</span>
              </Card.Meta>
              <Card.Description>
                SJ is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                221 Friends
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const slider = document.querySelector(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
    } else {
      console.log("nothing");
    }
  }, []);

  return (
    <>
      <div>
        <Message
          className="message-container"
          style={{
            backgroundImage: `url(${
              images[Math.floor(Math.random() * images.length)]
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

            {/* <Input fluid icon="search" placeholder="Search Events or Users ...">
              <Icon name="search " corner="left" />

              <input
                className="global-font-family"
                style={{ borderRadius: "100px" }}
              />
            </Input> */}

            <SearchBar />

            <div class="ui inverted statistic">
              <div
                style={{
                  fontSize: "20px",
                  color: "white",
                  paddingRight: "300px",
                }}
              >
                Events: 540, Participants: 4.4k, Location: 24
              </div>
            </div>
          </Container>
        </Message>
      </div>
      <Divider hidden></Divider>
      <searchevents></searchevents>

      <Container>
        <h2 class="ui header">Trending Events</h2>
        <div className="ui cardscollerContainer">
          <Grid columns={4} stackable>
            <Grid.Column>
              <div class="ui raised link card">
                <Card>
                  <Image src={trending_image1} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>SJ</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2021-</span>
                    </Card.Meta>
                    <Card.Description>
                      SJ is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      221 Friends
                    </a>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div class="ui raised link card">
                <Card>
                  <Image src={trending_image2} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>BI</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 202-</span>
                    </Card.Meta>
                    <Card.Description>
                      BI is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                    <div class="right floated ">
                      <span class="left floated like">
                        <i class="like icon"></i>
                        Like
                      </span>
                      <span class="right floated star">
                        <i class="star icon"></i>
                        Favorite
                      </span>
                    </div>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div class="ui raised link card">
                <Card>
                  <Image src={trending_image3} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>RC</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 202-</span>
                    </Card.Meta>
                    <Card.Description>
                      RC is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div class="ui raised link card">
                <Card>
                  <Image src={trending_image4} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>AR</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 202-</span>
                    </Card.Meta>
                    <Card.Description>
                      AR is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
      <Divider hidden></Divider>
      <Divider hidden></Divider>
      <Container>
        <h2 class="ui header">Scrollable Events</h2>

        <div
          className="items no-scrollbar"
          style={{
            width: "100%",
            // overflow: "auto",
            display: "flex",
            overflowY: "scroll",
            scrollbarWidth: "none",
            marginBottom: 0,
            paddingBottom: 0,
          }}
        >
          {map(range(10), (_) => (
            <BoxContainer />
          ))}
        </div>
      </Container>
      <Divider hidden></Divider>
    </>
  );
};

export default Home;
