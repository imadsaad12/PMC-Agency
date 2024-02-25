import styled from "styled-components";
import backgroundImageUrl from "../../global/images/background.jpg";
import phoneImg from "../../global/images/PhoneDivBIM.PNG";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 40%;
  color: white;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between; /* This will distribute the items evenly along the cross axis */
  align-items: center; /* Centers items horizontally */
  height: 100%; /* Make sure the container takes up the full height */
`;

export const MiddleContainer = styled.div`
  width: 30%;
  /* background-color: #444; */
  background-size: cover;
`;

export const RightContainer = styled.div`
  width: 30%;
  /* background-color: #555; */
  background-size: cover;
`;
export const IconWrapperYoutube = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 100px;
`;
export const IconWrapperInsta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: px;
  margin-top: 100px;
  margin-left: 18%;
`;

export const PhoneDivYoutube = styled.div`
  width: 250px; /* Adjust size as needed */
  height: 420px; /* Adjust size as needed */
  margin-left: 150px;
  margin-top: 100px;
  background-image: url(${phoneImg});
  background-size: cover;
`;
export const PhoneDivInsta = styled.div`
  width: 250px; /* Adjust size as needed */
  height: 420px; /* Adjust size as needed */
  margin-left: 150px;
  margin-top: 100px;
  background-image: url(${phoneImg});
  background-size: cover;
`;

export const Text = styled.p`
  font-size: 50px;
  color: white;
  font-weight: bold;
  font-family: "Arial", sans-serif; /* Use any font you like */
  text-align: center; /* Center align the text */
  margin-top: 100px;
`;
export const Button = styled.button`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  font-size: 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 300px;
  &:hover {
    background-color: lightpink;
  }
`;
