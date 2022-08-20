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
  //Hook that will display the errors messages
  const [error, setError] = React.useState({
    githubError: false,
  });

  //Submit validation
  function handleSubmit(event) {
    event.preventDefault();
    if (!event.target.elements.github.value) {
      setError({
        githubError: true,
      });
    } else {
      props.setSocialInfo({
        linkedin: event.target.elements.linkedin.value,
        github: event.target.elements.github.value,
      });
      setError({
        githubError: false,
      });
      props.setCurrentStep(2);
    }
  }
  return (
    <FormContainer id="socialForm" onSubmit={handleSubmit}>
      <BodyContainer>
        <UpperContainer>
          <InputContainer>
            <Input
              width={"100%"}
              label={props.socialTabNames.linkedinLabel}
              dValue={props.socialInfo.linkedin}
              id={"linkedin"}
            ></Input>
            <Input
              width={"100%"}
              label={props.socialTabNames.githubLabel + " *"}
              dValue={props.socialInfo.github}
              id={"github"}
              errorMessage={error.githubError}
            ></Input>
          </InputContainer>
        </UpperContainer>
        <ButtonContainer>
          <ButtonComponent
            icon={icon}
            type={"submit"}
            bName={props.socialTabNames.nextButtonText}
          />
        </ButtonContainer>
      </BodyContainer>
    </FormContainer>
  );
};

export default Social;
