import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  align-self: center;
  min-height: 65vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
