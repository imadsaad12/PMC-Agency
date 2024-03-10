import React from "react";
import { Container } from "./styles";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

export default function Services() {
  return (
    <Container id="services">
      <LeftSection />
      <RightSection />
    </Container>
  );
}
