import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const InputBox = styled.input`
  height: 20px;
  background: transparent;
  border: 2px solid #aaaaaa;
  color: #767676;
  font-size: 14px;
  border-radius: 4px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  height: 20px;
`;

export const InputErrorMessage = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  margin: 0;
  color: #ff0000;
  padding-bottom: 4px;
  padding-left: 10px;
`;

export const InputLabel = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  padding-bottom: 4px;
  color: #767676;
`;
