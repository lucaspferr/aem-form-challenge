import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  height: 68%;
  margin: 0;
  padding: 0;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 50%;
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20%;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 30%;
  }
`;

export const TermsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
  @media (max-width: 768px) {
    height: 10%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  height: 15%;
  @media (max-width: 768px) {
    height: 10%;
  }
`;

export const LowerParagraph = styled.p`
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  color: #767676;
  margin: 0;
  padding: 0;
`;

export const TermsCheckbox = styled.input`
  &:focus {
    outline: none;
  }
`;

export const TermsParagraph = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  color: #111111;
`;
