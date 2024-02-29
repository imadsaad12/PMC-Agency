import React from "react";
import { Body, Container, Divider } from "./styles";
import Header from "./header";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

export default function Intro() {
  return (
    <Container>
      <Header />
      <Divider />
      <Body>
        <LeftSection />
        <RightSection />
      </Body>
    </Container>
  );
}
