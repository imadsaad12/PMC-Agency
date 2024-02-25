import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Description,
  Button,
  LeftContainer,
  RightContainer,
  ContentContainer,
  SocialMediaContainer,
  ServiceTitle,
  ServiceItem,
  IconBox,
  Icon,
  StarIcon,
  GoogleIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  SnapchatIcon,
  ImageHolder,
  SocialMediaRow,
  StarsAndImageContainer,
} from "./styles";
import {
  ourServices,
  maximizeReach,
  tailoredApproach,
  getStarted,
  paidAdvertising,
  socialAds,
  strategyBuild,
  copywriting,
  videoProduction,
  buttonClicked,
} from "../../global/strings";
export default function OurServices() {
  const handleButtonClick = () => {
    console.log(buttonClicked);
  };

  return (
    <Container>
      <LeftContainer>
        <Title>{ourServices}</Title>
        <Subtitle>{maximizeReach}</Subtitle>
        <Description>{tailoredApproach}</Description>
        <Button onClick={handleButtonClick}>{getStarted}</Button>
      </LeftContainer>
      <RightContainer>
        <ContentContainer>
          <StarsAndImageContainer>
            <ImageHolder></ImageHolder>

            {/* <TicksContainer> */}

            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </StarsAndImageContainer>
          <ServiceTitle>{paidAdvertising}</ServiceTitle>
          <div>
            <ServiceItem>
              <Icon />
              {socialAds}
            </ServiceItem>
            <ServiceItem>
              <Icon />
              {strategyBuild}
            </ServiceItem>
            <ServiceItem>
              <Icon />
              {copywriting}
            </ServiceItem>
            <ServiceItem>
              <Icon />
              {videoProduction}
            </ServiceItem>
          </div>
        </ContentContainer>
        <SocialMediaContainer>
          <SocialMediaRow>
            <IconBox>
              <GoogleIcon />
            </IconBox>
            <IconBox>
              <YoutubeIcon />
            </IconBox>
            <IconBox>
              <InstagramIcon />
            </IconBox>
          </SocialMediaRow>
          <SocialMediaRow>
            <IconBox>
              <FacebookIcon />
            </IconBox>
            <IconBox>
              <TiktokIcon />
            </IconBox>
            <IconBox>
              <SnapchatIcon />
            </IconBox>
          </SocialMediaRow>
        </SocialMediaContainer>
      </RightContainer>
    </Container>
  );
}
