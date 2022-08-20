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
  LabelContainer,
  LowerParagraphError,
  TermsParagraphError,
} from "./styles";
import icon from "../../images/chevron-right.svg";
import Birthday from "../../micro/Birthday";

const Basic = (props) => {
  // Labels that will be displayed on the birthday component
  const birthdayNames = {
    dayLabel: props.basicTabNames.dayLabel,
    monthLabel: props.basicTabNames.monthLabel,
    yearLabel: props.basicTabNames.yearLabel,
    ageLabel: props.basicTabNames.ageLabel,
  };

  //Hook that will display the errors messages
  const errorsMessages = {
    birthdayError: "Please enter your ",
    termsError: "You must accept the terms",
  };
  const [error, setError] = React.useState({
    fullNameError: false,
    emailError: false,
  });

  //Submit validation
  function handleSubmit(event) {
    event.preventDefault();
    //the errorHandler will maintain the error hook integrity
    let errorHandler = {
      fullNameError: false,
      emailError: false,
      birthdayError: false,
      checkError: false,
    };
    if (
      !event.target.elements.fName.value ||
      !event.target.elements.email.value ||
      !event.target.elements.termsCheck.checked
    ) {
      event.target.elements.fName.value
        ? (errorHandler.fullNameError = false)
        : (errorHandler.fullNameError = true);
      event.target.elements.email.value
        ? (errorHandler.emailError = false)
        : (errorHandler.emailError = true);
      event.target.elements.termsCheck.checked
        ? (errorHandler.checkError = false)
        : (errorHandler.checkError = true);
      event.target.elements.age.value
        ? (errorHandler.birthdayError = false)
        : (errorHandler.birthdayError = true);
      setError(errorHandler);
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
            errorMessage={error.fullNameError}
            dValue={props.basicInfo.fName ? props.basicInfo.fName : ""}
          ></Input>
          <Input
            width={"100%"}
            label={props.basicTabNames.nickNameLabel}
            id={"nName"}
            dValue={props.basicInfo.nName ? props.basicInfo.nName : ""}
          ></Input>
          <Input
            width={"60%"}
            label={props.basicTabNames.emailLabel + " *"}
            id={"email"}
            errorMessage={error.emailError}
            dValue={props.basicInfo.email ? props.basicInfo.email : ""}
          ></Input>
          <Input
            width={"30%"}
            label={props.basicTabNames.phoneLabel}
            id={"phone"}
            dValue={props.basicInfo.phone ? props.basicInfo.phone : ""}
          ></Input>
        </UpperContainer>
        <LowerContainer>
          <LabelContainer>
            <LowerParagraph>
              {props.basicTabNames.birthdayLabel + " *"}
            </LowerParagraph>
            <LowerParagraphError>
              {error.birthdayError
                ? errorsMessages.birthdayError + props.basicTabNames.ageLabel
                : ""}
            </LowerParagraphError>
          </LabelContainer>
          <Birthday
            basicInfo={props.basicInfo}
            setBasicInfo={props.setBasicInfo}
            birthdayNames={birthdayNames}
            birthdate={props.birthdate}
            setBirthdate={props.setBirthdate}
          />
        </LowerContainer>
        <TermsContainer>
          <TermsCheckbox type={"checkbox"} id="termsCheck" />
          <TermsParagraph>{props.basicTabNames.termsLabel}</TermsParagraph>
          <TermsParagraphError>
            {error.checkError ? errorsMessages.termsError : ""}
          </TermsParagraphError>
        </TermsContainer>
        <ButtonContainer>
          <ButtonComponent
            icon={icon}
            type={"submit"}
            bName={props.basicTabNames.nextButtonText}
          />
        </ButtonContainer>
      </BodyContainer>
    </FormContainer>
  );
};

export default Basic;
