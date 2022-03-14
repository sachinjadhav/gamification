/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./listAllEvents";
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

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  renderSlides = () =>
    this.props.data.results.map((eventdata) => (
      <div>
        <Grid>
          <Grid.Column className="event_cardspacing">
            <div class="ui raised card eventlist">
              <div class="eventlist">
                <Item.Group link>
                  <Item>
                    <Item.Image
                      src={
                        require(`../../assets/images/trending/${eventdata.tags}.png`)
                          .default
                      }
                    />

                    <Item.Content>
                      <Item.Header as="a">
                        {" "}
                        <EllipsisText
                          text={eventdata.name}
                          length={"50"}
                          tooltip={true}
                        />
                      </Item.Header>
                      <Item.Meta>
                        <span>{eventdata.summary}</span>
                      </Item.Meta>
                      <Item.Description>{eventdata.summary}</Item.Description>
                      <Item.Extra>
                        <Label>{eventdata.tags}</Label>
                        <Label icon="globe" content={eventdata.venue} />
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

export default EventList;
