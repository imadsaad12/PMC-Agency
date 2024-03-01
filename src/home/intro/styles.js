import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(60, 32, 93);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  min-height: 100vh;
`;
export const Text = styled.p`
  font-size: 20px;
  color: white;
`;
export const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  width: 5px;
  height: 110%;
  position: absolute;
  background-color: black;
  transform: rotate(15deg);
  left: 45%;
`;

export const EffectsTop = styled.img`
  position: absolute;
  top: -90px;
  right: -390px;
  transform: rotate(30deg);
`;
export const EffectsBottom = styled.img`
  position: absolute;
  bottom: -50px;
  left: -400px;
  transform: rotate(-150deg);
`;
