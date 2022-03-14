/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./leaderboard.css";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import EllipsisText from "react-ellipsis-text";
import {
  Icon,
  Grid,
  Divider,
  Card,
  Image,
  Item,
  Label,
} from "semantic-ui-react";
import { height } from "@mui/system";
import Avatar from "react-avatar";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  renderSlides = () =>
    this.props.data.results.map((userdata) => (
      <div>
        <Grid>
          <Grid.Column className="event_cardspacing">
            <div class="ui raised card eventlist">
              <div class="eventlist">
                <Item.Group link>
                  <Item>
                    <Avatar
                      name={userdata.name}
                      size="80"
                      textSizeRatio={3}
                      round="50px"
                      style={{ marginRight: 10 }}
                    />

                    <Item.Content>
                      <Item.Header as="a">
                        {" "}
                        <EllipsisText
                          text={userdata.name}
                          length={"50"}
                          tooltip={true}
                        />
                      </Item.Header>
                      <Item.Meta>
                        <span>{userdata.email}</span>
                      </Item.Meta>
                      <Item.Description>{userdata.rank}</Item.Description>
                      <Item.Extra>
                        <Label>{userdata.location}</Label>
                        <Label icon="globe" content={userdata.organization} />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </div>
            </div>
          </Grid.Column>
        </Grid>
        {/* <Grid>
          <Grid.Column className="event_cardspacing">
            <div class="ui raised link card">
              <Card className="event_list">
                <img
                  src={
                    require(`../../assets/images/trending/${eventdata.tags}.png`)
                      .default
                  }
                />

                <div>
                  <Card.Content>
                    <Card.Header>
                      <EllipsisText
                        text={eventdata.name}
                        length={"20"}
                        tooltip={true}
                      />
                    </Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2021-</span>
                    </Card.Meta>
                    <Card.Description>{eventdata.summary}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      221 Friends
                    </a>
                  </Card.Content>
                </div>
              </Card>
            </div>
          </Grid.Column>
        </Grid> */}
      </div>
    ));

  render() {
    // console.log(this.props);
    return (
      <>
        <Container>{this.renderSlides()}</Container>
      </>
    );
  }
}

export default UserList;
