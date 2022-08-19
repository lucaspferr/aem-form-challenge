import React, { useEffect } from "react";
import {
  InputContainer,
  InputBox,
  InputLabel,
  InputErrorMessage,
  LabelContainer,
} from "./styles";

const Input = (props) => {
  const inputStyle = {
    width: props.width,
  };
  const [errorMsg, setErrorMsg] = React.useState("");

  useEffect(() => {
    if (props.errorMessage) {
      setErrorMsg("Please enter your " + props.label.replace("*", ""));
    } else {
      setErrorMsg("");
    }
  }, [props.errorMessage, props.label]);

  return (
    <InputContainer style={inputStyle}>
      <LabelContainer>
        <InputLabel>{props.label}</InputLabel>
        <InputErrorMessage>{errorMsg}</InputErrorMessage>
      </LabelContainer>
      <InputBox id={props.id} />
    </InputContainer>
  );
};

export default Input;
