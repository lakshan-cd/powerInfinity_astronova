import React from "react";
import NavBar from "../../Components/NavBar";
import { Grid, Typography, Box } from "@mui/material";
import {
  LeftAbout,
  RightAbout,
  AboutContainer,
  Header,
  HeaderBox,
  TextBox,
  Text,
  ConnectBox,
  CIcon,
  DataBox,
  CompanyData,
  TalkText,
  ButtonBoxData,
  StyledAdd,
  // Assuming this component contains styles for FaceId
} from "../../Components/SignUpComponent/Style";
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <AboutContainer>
        <LeftAbout item xs={6}>
          <HeaderBox>
            <Header>About Us</Header>
          </HeaderBox>
          <TextBox>
            <Text>
              Embark on a journey beyond Earth with us at Astronova. Our space
              travel packages offer a unique opportunity to experience the
              wonders of the cosmos. From floating in microgravity to gazing at
              distant planets, we make your celestial dreams a reality. Join us
              in shaping the future of space tourism and book your ticket to the
              stars today.
            </Text>
          </TextBox>
        </LeftAbout>
        <RightAbout item xs={6}>
          <ConnectBox>
            <CIcon />
            <TalkText>Let 's Talk</TalkText>
          </ConnectBox>
          <DataBox>
            <CompanyData>Share your ideas</CompanyData>
            <CompanyData>astronova@gmail.com</CompanyData>
            <CompanyData>+95 423 8562</CompanyData>
          </DataBox>
          <ButtonBoxData>
            <StyledAdd>FAQs</StyledAdd>
            <StyledAdd>FeedBack</StyledAdd>
          </ButtonBoxData>
        </RightAbout>
      </AboutContainer>
    </div>
  );
};

export default AboutUs;
