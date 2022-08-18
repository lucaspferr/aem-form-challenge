import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  color: #111111;
  margin: 0;
  padding: 0 0 0 10px;
  height: 5%;
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 16px;
  margin: 5vh auto;
  width: 660px;
  height: 85vh;
  @media (max-width: 768px) {
    width: 90vw;
  }
  @media (min-height: 2000px) {
    height: 1080px;
    margin: 60px auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80vh;
  margin: 2.5vh auto;
  @media (min-height: 2000px) {
    height: 1000px;
    margin: 40px auto;
  }
`;
