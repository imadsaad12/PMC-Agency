import React from "react";
import {
  Body,
  Container,
  Header,
  ImageContainer,
  ListContainer,
  ListRow,
  ListTitle,
  Logo,
  Row,
  SocialMediaContainer,
  SocialMediaLogo,
} from "./styles";
import logo from "../../../static/logo.webp";
import google from "../../../static/google.webp";
import youtube from "../../../static/youtube.webp";
import tiktok from "../../../static/tiktok.webp";
import facebook from "../../../static/facebook.png";
import snapchat from "../../../static/snapchat.png";
import instagram from "../../../static/instagram.webp";
import { IoStar } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import useBreakpoint from "../../../utilities/mediaQuery";

export default function RightSection() {
  const isSmallScreen = useBreakpoint(770);
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <div style={{ gap: "5px", display: "flex" }}>
          <IoStar style={{ fontSize: "30px", color: "#8E3AAA" }} />
          <IoStar style={{ fontSize: "30px", color: "#8E3AAA" }} />
          <IoStar style={{ fontSize: "30px", color: "#8E3AAA" }} />
          <IoStar style={{ fontSize: "30px", color: "#8E3AAA" }} />
        </div>
      </Header>
      <Body>
        <ListContainer>
          <ListTitle>Paid Advertising</ListTitle>
          <ListRow>
            <GiCheckMark style={{ fontSize: "20px", color: "#8E3AAA" }} />
            <p>Social Ads</p>
          </ListRow>
          <ListRow>
            <GiCheckMark style={{ fontSize: "20px", color: "#8E3AAA" }} />
            <p>Strategy Build</p>
          </ListRow>
          <ListRow>
            <GiCheckMark style={{ fontSize: "20px", color: "#8E3AAA" }} />
            <p>Copywriting</p>
          </ListRow>
          <ListRow>
            <GiCheckMark style={{ fontSize: "20px", color: "#8E3AAA" }} />
            <p>Video Production</p>
          </ListRow>
        </ListContainer>
        <SocialMediaContainer>
          <Row>
            <ImageContainer>
              <SocialMediaLogo src={google} />
            </ImageContainer>
            <ImageContainer>
              <SocialMediaLogo src={youtube} />
            </ImageContainer>
          </Row>
          <Row>
            <ImageContainer>
              <SocialMediaLogo src={tiktok} />
            </ImageContainer>

            <ImageContainer>
              <SocialMediaLogo src={snapchat} />
            </ImageContainer>
          </Row>
          <Row>
            <ImageContainer>
              <SocialMediaLogo
                src={facebook}
                style={{ width: "40px", height: "40px" }}
              />
            </ImageContainer>
            <ImageContainer>
              <SocialMediaLogo
                src={instagram}
                style={{ width: "40px", height: "40px" }}
              />
            </ImageContainer>
          </Row>
        </SocialMediaContainer>
      </Body>
    </Container>
  );
}
