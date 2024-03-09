import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  margin-left: 120px;
`;
export const Title = styled.h1`
  color: purple;
  font-size: 22px; /* Default font size */

  @media (max-width: 770px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;
export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 20px;
`;

export const LeftImage = styled.img`
  width: 600px;
  height: 400px;
  @media (max-width: 770px) {
    width: 250px;
    height: 150px;
  }
`;

export const LeftDescription = styled.p`
  /* text-align: center; */
  font-weight: bold;
  @media (max-width: 770px) {
    font-size: 12px; /* Adjust font size for smaller screens */
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 20px;
`;

export const RightImage = styled.img`
  width: 600px;
  height: 400px;
  @media (max-width: 770px) {
    width: 250px;
    height: 150px;
  }
`;

export const RightDescription = styled.p`
  /* text-align: center; */
  font-weight: bold;
  @media (max-width: 770px) {
    font-size: 12px; /* Adjust font size for smaller screens */
  }
`;
