import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  /* text-align: center; */
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
  width: 400px;
  height: 400px;
  border-radius: 10px;
  @media (max-width: 770px) {
    width: 150px;
    height: 150px;
  }
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
  width: 400px;
  height: 400px;
  border-radius: 10px;
  @media (max-width: 770px) {
    width: 150px;
    height: 150px;
  }
`;

export const RightDescription = styled.p`
  text-align: center;
`;
