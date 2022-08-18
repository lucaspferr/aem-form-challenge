import React from "react";
import ButtonComponent from "../../micro/Button";
import Input from "../../micro/Input";
import {
  BodyContainer,
  UpperContainer,
  LowerContainer,
  ButtonContainer,
  TermsContainer,
  LowerParagraph,
  TermsCheckbox,
  TermsParagraph,
  FormContainer,
} from "./styles";
import icon from "../../images/chevron-right.svg";
import Birthday from "../../micro/Birthday";

const Basic = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.fName.value);
    if (
      !event.target.elements.fName.value ||
      !event.target.elements.email.value
    ) {
      alert("Please enter your first name");
    } else if (!event.target.elements.termsCheck.checked) {
      alert("Check not checked");
    } else {
      props.setBasicInfo({
        ...props.basicInfo,
        fName: event.target.elements.fName.value,
        nName: event.target.elements.nName.value,
        email: event.target.elements.email.value,
        phone: event.target.elements.phone.value,
        birthday:
          event.target.elements.day.value +
          "/" +
          event.target.elements.month.value +
          "/" +
          event.target.elements.year.value,
      });
      props.setCurrentStep(1);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit} id="basicForm">
      <BodyContainer>
        <UpperContainer>
          <Input
            width={"100%"}
            label={props.basicTabNames.fullNameLabel + " *"}
            id={"fName"}
          ></Input>
          <Input
            width={"100%"}
            label={props.basicTabNames.nickNameLabel}
            id={"nName"}
          ></Input>
          <Input
            width={"60%"}
            label={props.basicTabNames.emailLabel + " *"}
            id={"email"}
          ></Input>
          <Input
            width={"30%"}
            label={props.basicTabNames.phoneLabel}
            id={"phone"}
          ></Input>
        </UpperContainer>
        <LowerContainer>
          <LowerParagraph>
            {props.basicTabNames.birthdayLabel + " *"}
          </LowerParagraph>
          <Birthday setBasicInfo={props.setBasicInfo} />
        </LowerContainer>
        <TermsContainer>
          <TermsCheckbox type={"checkbox"} id="termsCheck" />
          <TermsParagraph>{props.basicTabNames.termsLabel}</TermsParagraph>
        </TermsContainer>
        <ButtonContainer>
          <ButtonComponent icon={icon} type={"submit"} />
        </ButtonContainer>
      </BodyContainer>
    </FormContainer>
  );
};

export default Basic;
