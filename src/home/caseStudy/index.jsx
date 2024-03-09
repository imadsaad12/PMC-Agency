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
  firstDescriptionCaseStudyP1,
  firstDescriptionCaseStudyP2,
  secondDescriptionCaseStudyP1,
  secondDescriptionCaseStudyP2,
} from "../../global/strings";
import backgroundImageUrl1 from "../../../src/static/lateststudy1.jpg";
import backgroundImageUrl2 from "../../../src/static/lateststudy2.jpg";

export default function CaseStudy() {
  return (
    <Container>
      <Title>{caseStudyTitle}</Title>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <LeftContainer>
          <LeftImage src={backgroundImageUrl1} />
          <LeftDescription>
            {firstDescriptionCaseStudyP1} <br></br>
            <br></br>
            {firstDescriptionCaseStudyP2}{" "}
          </LeftDescription>
        </LeftContainer>
        <RightContainer>
          <RightImage src={backgroundImageUrl2} />
          <RightDescription>
            {" "}
            {secondDescriptionCaseStudyP1} <br></br>
            <br></br>
            {secondDescriptionCaseStudyP2}{" "}
          </RightDescription>
        </RightContainer>
      </div>
    </Container>
  );
}
