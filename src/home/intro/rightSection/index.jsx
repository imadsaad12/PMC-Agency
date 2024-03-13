import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  SocialMediaIcon,
  Text,
} from "./styles";

import shoes from "../../../static/sport_shoes.webp";
import youtube from "../../../static/youtube.webp";
import drink from "../../../static/drink.webp";
import tiktok from "../../../static/tiktok.webp";
import useBreakpoint from "../../../utilities/mediaQuery";

export default function RightSection() {
  const isSmallScreen = useBreakpoint(770);

  return (
    <Container>
      <ImageContainer
        style={{ alignSelf: !isSmallScreen && "flex-end", height: "250px" }}
      >
        <Text>182%+</Text>
        <Image src={shoes} />
        <SocialMediaIcon src={youtube} />
      </ImageContainer>
      <ImageContainer style={{ alignSelf: !isSmallScreen && "flex-start" }}>
        <Image src={drink} />
        <SocialMediaIcon
          src={tiktok}
          style={{ top: "-20px", left: isSmallScreen && "-15px" }}
        />
        <Text>and many more</Text>
      </ImageContainer>
    </Container>
  );
}
