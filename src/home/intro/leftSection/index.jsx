import React from "react";
import {
  Button,
  Container,
  MainTittle,
  SmallText,
  SmallTittle,
} from "./styles";

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
      <Button>start application</Button>
    </Container>
  );
}
