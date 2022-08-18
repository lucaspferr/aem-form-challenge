import React from "react";
import ButtonComponent from "../../micro/Button";
import {
  BodyContainer,
  ButtonContainer,
  UpperContainer,
  InputContainer,
  FormContainer,
} from "./styles";
import icon from "../../images/chevron-right.svg";
import Input from "../../micro/Input";

const Social = (props) => {
  function handleSubmit(event) {
    if (!event.target.elements.github.value) {
      alert("Please enter your Github");
    } else {
      props.setSocialInfo({
        linkedin: event.target.elements.linkedin.value,
        github: event.target.elements.github.value,
      });
    }
    props.setCurrentStep(2);
  }
  return (
    <FormContainer id="socialForm" onSubmit={handleSubmit}>
      <BodyContainer>
        <UpperContainer>
          <InputContainer>
            <Input width={"100%"} label={"Linkedin"} id={"linkedin"}></Input>
            <Input width={"100%"} label={"Github *"} id={"github"}></Input>
          </InputContainer>
        </UpperContainer>
        <ButtonContainer>
          <ButtonComponent icon={icon} type={"submit"} />
        </ButtonContainer>
      </BodyContainer>
    </FormContainer>
  );
};

export default Social;
