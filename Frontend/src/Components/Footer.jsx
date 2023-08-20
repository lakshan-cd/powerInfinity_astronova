import React from "react";
import { Container, Grid, Typography, Divider } from "@mui/material";
import styled from "styled-components";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./footer.css";

const MyComponent = styled("Container")({
  padding: 0,
});

const Footer = () => {
  return (
    <MyComponent maxWidth="md">
      <Grid container spacing={3} rows={3}>
        <Grid item xs={12} md={4}>
          <div className="item-container">
            {" "}
            <Typography className="typography" variant="subtitle1">
              Quick Links
            </Typography>
            <a href="">FAQ</a>
            <br />
            <a href="">Guidlines</a>
            <br />
            <a href="">Privacy Policy</a>
            <br />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="item-container">
            <Typography className="typography" variant="subtitle1">
              Let's talk
            </Typography>
            <a href="tel:+94114567890">Call us</a>
            <br />
            <a href="mailto:powereinfinity@gmail.com">Email Us</a>
            <br />
            <a>Help Center</a>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className="item-container">
          <div className="item-container social-media">
            {" "}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a
                href="https://youtube.com/@PowerInfinity"
                className="icon-container"
              >
                {" "}
                <YouTubeIcon />
              </a>

              <a href="https://www.facebook.com/" className="icon-container">
                <FacebookOutlinedIcon />
              </a>

              <a href="https://www.instagram.com/" className="icon-container">
                {" "}
                <InstagramIcon />
              </a>

              <a href="https://www.pinterest.com/" className="icon-container">
                {" "}
                <PinterestIcon />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
      <hr style={{ margin: "10px 8%" }} />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}></Grid>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={12}>
          123 Galle Road | Katubedda | Moratuwa | Sri Lanka
        </Grid>
        <Grid item xs={12} md={12}>
          {" "}
          &copy;All right reserved - Astronova
        </Grid>
      </Grid>
    </MyComponent>
  );
};

export default Footer;
