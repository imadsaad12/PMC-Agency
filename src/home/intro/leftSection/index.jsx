import React from "react";
import {
  Button,
  Container,
  MainTittle,
  SmallText,
  SmallTittle,
} from "./styles";
import { Link } from "react-scroll";

export default function LeftSection() {
  return (
    <Container>
      <SmallTittle>Outcome driven</SmallTittle>
      <MainTittle>
        Your DTC <br />
        Partner
        <br /> For
        <br />
        Digital
        <br />
        Success
      </MainTittle>
      <SmallText>
        We're omni-channel digital advertising growth <br />
        experts focused on outcome-based results
      </SmallText>
      <Link to={"form"} smooth duration={1000} offset={-100}>
        <Button>start application</Button>
      </Link>
    </Container>
  );
}
