import React from "react";
import NavBar from "../Components/NavBar";
import { Grid, Typography, Box } from "@mui/material";
import {
  LeftAbout,
  RightAbout,
  AboutContainer,
  Header,
  // Assuming this component contains styles for FaceId
} from "../Components/SignUpComponent/Style";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <AboutContainer>
        <LeftAbout item xs={6}>
          <Box>
            <Header>About Us</Header>
          </Box>
        </LeftAbout>
        <RightAbout item xs={6}>
          Let's Talk
        </RightAbout>
      </AboutContainer>
    </div>
  );
};

export default AboutUs;
