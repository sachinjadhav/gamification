import React, { Component } from "react";
import { badges, badgeColor } from "./staticData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { CompactPicker } from "react-color";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Container } from "semantic-ui-react";
import placeholder from "../../assets/images/kudos/ecards/placeholder.png";
import ArenaBadge from "./ArenaBadge";
import "./marketplace.css";

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
      icons: [],
      selectimage: placeholder,
      template: "badge_1",
    };
  }

  componentDidMount = () => {
    this.setState({ badges: badges, badgeColor: "#22194D" });
  };

  imageClick = (image) => this.setState({ selectimage: image });

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleChangeComplete = (color) => {
    this.setState({ badgeColor: color.hex });
  };

  render() {
    return (
      <>
        <div>
          <Container>
            <Box m={2} pt={3}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <h2 class="ui header"> Badge Designer</h2>
                  <ImageList
                    sx={{ width: 500, height: 150 }}
                    cols={3}
                    rowHeight={100}
                    variant="quilted"
                  >
                    {this.state.badges.map((badge, i) => (
                      <div>
                        <ImageListItem key={badge.img}>
                          <img
                            key={i}
                            alt={badge.img}
                            src={badge.img.default}
                            className="overlay-template-img"
                            height={100}
                            width={100}
                            loading="lazy"
                            onClick={() =>
                              this.setState({ template: badge.name })
                            }
                          />
                        </ImageListItem>
                      </div>
                    ))}
                  </ImageList>

                  <Box m={2} pt={3}>
                    <CompactPicker
                      color={this.state.background}
                      onChangeComplete={this.handleChangeComplete}
                    />
                  </Box>
                  <Box m={2} pt={3}>
                    <TextField
                      className="badgenametextfield"
                      label="Enter Badge name"
                      name="badgename"
                      fullWidth
                      variant="standard"
                      margin="dense"
                      value={this.state.text}
                      onChange={this.handleTextChange}
                    />
                  </Box>
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
                    <div className="badge-preview-div">
                      <div className="badge-preview-small">
                        <ArenaBadge
                          name={this.state.name}
                          template={this.state.template}
                          text={this.state.text}
                          icon={"star"}
                          colour={this.state.badgeColor}
                          size={"small"}
                        />
                      </div>
                      <div className="badge-preview-big">
                        <ArenaBadge
                          name={this.state.name}
                          template={this.state.template}
                          text={this.state.text}
                          icon={"star"}
                          colour={this.state.badgeColor}
                          size={"big"}
                        />
                      </div>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </>
    );
  }
}

export default Marketplace;
