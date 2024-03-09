import React from "react";
import { Container } from "./styles";
import Intro from "./intro";
import Services from "./services";
import CaseStudy from "./caseStudy";

export default function Home() {
  return (
    <Container>
      <Intro />
      <Services />
      <CaseStudy />
    </Container>
  );
}
