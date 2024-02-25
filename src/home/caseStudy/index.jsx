import React from "react";
import {
  Container,
  Title,
  LeftContainer,
  LeftImage,
  LeftDescription,
  RightContainer,
  RightImage,
  RightDescription,
} from "./styles";
import {
  caseStudyTitle,
  firstDescriptionCaseStudy,
  secondDescriptionCaseStudy,
} from "../../global/strings";
import backgroundImageUrl from "../../global/images/unnamed.png";

export default function CaseStudy() {
  return (
    <Container>
      <Title>{caseStudyTitle}</Title>
      <div style={{ display: "flex" }}>
        <LeftContainer>
          <LeftImage src={backgroundImageUrl} />
          <LeftDescription>{firstDescriptionCaseStudy}</LeftDescription>
        </LeftContainer>
        <RightContainer>
          <RightImage src={backgroundImageUrl} />
          <RightDescription>{secondDescriptionCaseStudy}</RightDescription>
        </RightContainer>
      </div>
    </Container>
  );
}
