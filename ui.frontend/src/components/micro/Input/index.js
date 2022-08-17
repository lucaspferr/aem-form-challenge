import React from "react";
import { InputContainer, InputBox, InputLabel } from "./styles";

const Input = (props) => {
  const inputStyle = {
    width: props.width,
  };

  return (
    <InputContainer style={inputStyle}>
      <InputLabel>{props.label}</InputLabel>
      <InputBox id={props.id} />
    </InputContainer>
  );
};

export default Input;
