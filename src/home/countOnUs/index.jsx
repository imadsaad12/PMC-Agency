import React from "react";
import {
  Container,
  Text,
  Button,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  PhoneDivYoutube,
  PhoneDivInsta,
  IconWrapperYoutube,
  IconWrapperInsta,
} from "./styles";
import { FaYoutube, FaInstagram } from "react-icons/fa"; // Importing the necessary icons
import { countOnUsText, expertiseText } from "../../global/strings";

// import { } from "./styles";

export default function CountOnUs() {
  const handleButtonClick = () => {
    // Add functionality here
    console.log("Button clicked");
  };

  return (
    <Container>
      <LeftContainer>
        <Text>{countOnUsText}</Text>
        <Text>{expertiseText} </Text>
        <Button onClick={handleButtonClick}>Get Started</Button>
      </LeftContainer>

      <MiddleContainer>
        <IconWrapperYoutube>
          <FaYoutube size={50} color="red" />
        </IconWrapperYoutube>
        <PhoneDivYoutube />
      </MiddleContainer>
      <RightContainer>
        <IconWrapperInsta>
          <FaInstagram size={50} color="#bc2a8d" />
        </IconWrapperInsta>
        <PhoneDivInsta />
      </RightContainer>
    </Container>
  );
}
