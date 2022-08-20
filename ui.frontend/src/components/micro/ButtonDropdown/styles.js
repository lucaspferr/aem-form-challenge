import styled from "styled-components";

export const ListForm = styled.form`
  width: 100%;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 17vh;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InvalidContainer = styled.div`
  display: flex;
  height: 5vh;
  justify-content: flex-end;
  div {
    width: 100%;
    P {
      font-family: "Nunito", sans-serif;
      font-size: 9px;
      color: #ff0000;
      margin: 0;
      padding: 0;
      text-align: end;
    }
  }
`;

export const Container = styled.div`
  width: 50%;
  margin: 10px 0 0 0;
`;

export const DropButton = styled.button`
  display: flex;
  width: 140px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: #074ee8;
  justify-content: center;
  align-items: center;
`;

export const DropBtnText = styled.p`
  display: flex;
  margin: 0 10px 0 0;
  padding: 0;
  font-size: 12px;
  color: white;
`;

export const MoreBtnText = styled.p`
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: white;
`;

export const DropBtnIcon = styled.img`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MoreButton = styled.button`
  display: flex;
  width: 80px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: #074ee8;
  justify-content: space-around;
  align-items: center;
`;

export const DropList = styled.ul`
  display: block;
  position: fixed;
  list-style-type: none;
  margin: -6px 0 0 0;
  padding: 6px 0 3px 0;
  width: 140px;
  border-radius: 4px;

  background: rgba(7, 78, 232, 0.8);
  li {
    display: flex;
    justify-content: space-between;
    margin: 0;
    color: white;
    font-weight: normal;
  }
`;

export const RemoveItem = styled.button`
  border: none;
  background: transparent;
  color: white;
  font-size: 10px;
`;

export const TextItem = styled.p`
  color: white;
  font-size: 10px;
  font-weight: normal;
  margin: 0;
  padding: 2px 0 0 6px;
  width: 110px;
  height: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
