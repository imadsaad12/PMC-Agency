import React from "react";
import {
  Container,
  Image,
  LeftSection,
  RightSection,
  Text,
  Title,
} from "./styles";
import image1 from "../../static/caseStudies.webp";

export default function CaseStudies() {
  return (
    <div
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
      id="case-studies"
    >
      <Title>Latest case studies</Title>
      <Container>
        <LeftSection>
          <div style={{ width: "100%" }}>
            <Image src={image1} />
            <Text>
              Give a short description of your project. Share the impact it
              made.
            </Text>
          </div>
        </LeftSection>
        <RightSection>
          <div style={{ width: "100%" }}>
            <Image src={image1} />
            <Text>
              Give a short description of your project. Share the impact it
              made.
            </Text>
          </div>
        </RightSection>
      </Container>
    </div>
  );
}
