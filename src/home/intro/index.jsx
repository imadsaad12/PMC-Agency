import React from "react";
import { Body, Container, Divider, EffectsTop, EffectsBottom } from "./styles";
import Header from "./header";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import effect from "../../static/s.svg";
import useBreakpoint from "../../utilities/mediaQuery";

export default function Intro() {
  const isSmallScreen = useBreakpoint(770);
  return (
    <Container>
      <EffectsTop src={effect} />
      <EffectsBottom src={effect} />
      <Header />
      {!isSmallScreen && <Divider />}
      <Body>
        <LeftSection />
        <RightSection />
      </Body>
    </Container>
  );
}
