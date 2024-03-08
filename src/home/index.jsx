import React from "react";
import { Container } from "./styles";
import Intro from "./intro";
import Services from "./services";

export default function Home() {
  return (
    <Container>
      <Intro />
      <Services />
    </Container>
  );
}
