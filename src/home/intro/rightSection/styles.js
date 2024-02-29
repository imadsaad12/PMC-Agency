import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
  padding-bottom: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 400px;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
export const SocialMediaIcon = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  left: -30px;
  top: 15px;
`;

export const Text = styled.p`
  color: #a744c8;
  font-weight: bold;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: right;
  line-height: 0px;
`;
