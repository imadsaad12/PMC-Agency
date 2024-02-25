import styled from "styled-components";
import backgroundImageUrl from "../../global/images/unnamed.png";

export const Container = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: purple;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const LeftImage = styled.img`
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
`;

export const LeftDescription = styled.p`
  text-align: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const RightImage = styled.img`
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  background-position: center;
`;
export const RightDescription = styled.p`
  text-align: center;
`;
