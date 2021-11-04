import { Typography } from "@mui/material";
import {
  Header,
  Message,
  Button,
  Icon,
  Input,
  Grid,
  Placeholder,
  Segment,
  Divider,
  Container,
  Card,
  Image,
} from "semantic-ui-react";
import SearchComponent from "./Home/searchbar";

function About() {
  return (
    <div>
      <Typography>About us page</Typography>

      {/* <Input fluid icon="search" placeholder="Search Events or Users ...">
        <Icon name="search " corner="left" />

        <input
          className="global-font-family"
          style={{ borderRadius: "100px" }}
        />
        
      </Input> */}
      <Container text>
        <SearchComponent />
      </Container>
    </div>
  );
}
export default About;
