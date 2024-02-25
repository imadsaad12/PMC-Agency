import React from "react";
import { Container } from "./styles";
import Intro from "./intro";
// import CountOnUs from "./countOnUs";
// import Services from "./services";
// import Statistics from "./statistics";
import CaseStudy from "./caseStudy";
import OurServices from "./ourServices";
export default function Home() {
  return (
    <Container>
      <Intro />
      <Intro />
      <Intro />
      <Intro />
      <CaseStudy />
      <OurServices />
    </Container>
  );
}
