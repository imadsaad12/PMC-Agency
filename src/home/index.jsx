import React from "react";
import { Container } from "./styles";
import Intro from "./intro";
import Services from "./services";
import CaseStudies from "./case-studies";
import ContactUs from "./contact-us";
import Form from "./form";

export default function Home() {
  return (
    <Container>
      <Intro />
      <Services />
      <CaseStudies />
      <ContactUs />
      <Form />
    </Container>
  );
}
