import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 16px;
  margin: 5vh auto;
  width: 460px;
  height: 90vh;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 85vh;
  margin: 2.5vh auto;
`;
