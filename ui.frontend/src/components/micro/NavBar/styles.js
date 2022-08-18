import styled from "styled-components";

export const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 20%;
  padding: 0;
  margin: 0;
`;

export const ListLines = styled.li`
  width: 100%;
`;

export const ListButton = styled.button`
  font-family: "Nunito", sans-serif;
  width: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  box-shadow: inset 0px -2px 0px #aaaaaa;
  color: #111111;
`;

export const ListButtonActive = styled.button`
  font-family: "Nunito", sans-serif;
  width: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  box-shadow: inset 0px -3px 0px #074ee8;
  color: #074ee8;
`;
