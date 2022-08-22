import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  color: #111111;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin: 0;
  padding: 0;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 70%;
  min-height: 50%;
  align-content: space-around;
  P {
    font-family: "Nunito", sans-serif;
    color: #111111;
    margin: 0 0 10px 0;
    width: 100%;
    line-height: 26px;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 0;
  width: 75%;
  height: 100%;
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    font-size: 14px;
    padding: 3px 0 0 10px;
    overflow-wrap: break-word;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  width: 100%;
  height: 20%;
  P {
    font-family: "Nunito", sans-serif;
    color: #111111;
    margin: 0 0 10px 0;
    width: 100%;
    line-height: 26px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  height: 15%;
`;
