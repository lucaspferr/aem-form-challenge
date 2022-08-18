import React from "react";
import ButtonComponent from "../../micro/Button";
import ButtonDropdown from "../../micro/ButtonDropdown";
import Input from "../../micro/Input";
import icon from "../../images/chevron-right.svg";
import {
  UpperContainer,
  BodyContainer,
  ButtonContainer,
  LowerContainer,
  FormContainer,
} from "./styles";

const Certificates = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    if (
      !event.target.elements.teamName.value ||
      !event.target.elements.institution.value ||
      !event.target.elements.graduation.value
    ) {
      alert("Please enter your team name");
    } else {
      props.setCertificatesInfo({
        teamName: event.target.elements.teamName.value,
        institution: event.target.elements.institution.value,
        graduation: event.target.elements.graduation.value,
        certificates: props.certificatesInfo.certificates,
      });
      props.setCurrentStep(3);
    }
  }

  return (
    <BodyContainer>
      <UpperContainer>
        <ButtonDropdown
          certificatesList={props.certificatesInfo.certificates}
          setCertificatesInfo={props.setCertificatesInfo}
        />
      </UpperContainer>
      <FormContainer id="lcertificateform" onSubmit={handleSubmit}>
        <LowerContainer>
          <Input width={"100%"} label={"Team Name *"} id={"teamName"} />
          <Input width={"100%"} label={"Institution *"} id={"institution"} />
          <Input width={"100%"} label={"Graduation *"} id={"graduation"} />
        </LowerContainer>
        <ButtonContainer>
          <ButtonComponent icon={icon} type={"submit"} width={"500px"} />
        </ButtonContainer>
      </FormContainer>
    </BodyContainer>
  );
};

export default Certificates;
