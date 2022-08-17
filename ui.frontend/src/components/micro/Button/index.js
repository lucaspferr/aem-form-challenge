import React from "react";
import { Button, ButtonIcon, ButtonText, ButtonWrapper } from "./styles";

const ButtonComponent = (props) => {
  return (
    <Button type={props.type} style={props.bStyle}>
      <ButtonWrapper style={props.wStyle}>
        <ButtonText>{props.bName}</ButtonText>
        <ButtonIcon src={props.icon} />
      </ButtonWrapper>
    </Button>
  );
};

export default ButtonComponent;
