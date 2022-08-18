import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const SelectBox = styled.select`
  font-family: "Nunito", sans-serif;
  height: 24px;
  background: transparent;
  border: 2px solid #aaaaaa;
  color: #767676;
  font-size: 12px;
  border-radius: 4px;
  padding: 1px 2px 1px 5px;
  &:focus {
    outline: none;
  }
`;

export const AgeBox = styled.input`
  height: 18px;
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

export const SelectLabel = styled.label`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  padding-bottom: 3px;
  color: #767676;
`;
