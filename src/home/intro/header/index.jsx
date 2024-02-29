import React from "react";
import {
  Button,
  CompanyName,
  Container,
  Logo,
  LogoContainer,
  MenuContainer,
  MenuItem,
} from "./styles";
import logoSrc from "../../../static/logo.webp";

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logoSrc} />
        <CompanyName>
          Pledge Media <br /> Consultancy
        </CompanyName>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>About</MenuItem>
        <MenuItem>Latest studies</MenuItem>
        <Button>Apply Now</Button>
      </MenuContainer>
    </Container>
  );
}
