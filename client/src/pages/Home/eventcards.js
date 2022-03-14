/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import EllipsisText from "react-ellipsis-text";
import { Icon, Grid, Divider, Card, Image } from "semantic-ui-react";
// images import

class EventCards extends Component {
  constructor(props) {
    super(props);
  }

  renderSlides = () =>
    this.props.data.results.map((eventdata) => (
      <div>
        <Grid>
          <Grid.Column className="event_cardspacing">
            <div class="ui raised link card">
              <Card className="event_card">
                <img
                  src={
                    require(`../../assets/images/trending/${eventdata.tags}.png`)
                      .default
                  }
                />
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
                    221 Users
                  </a>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    ));

  render() {
    // console.log(this.props);
    return (
      <>
        <Container>
          <Slider
            dots={true}
            slidesToShow={4}
            slidesToScroll={4}
            infinite={false}
            arrows={true}
            swipe={true}
            touchMove={true}
          >
            {this.renderSlides()}
          </Slider>
        </Container>
      </>
    );
  }
}

export default EventCards;
