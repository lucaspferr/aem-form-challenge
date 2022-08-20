import React from "react";
import ButtonComponent from "../../micro/Button";
import ButtonDropdown from "../../micro/ButtonDropdown";
import Input from "../../micro/Input";
import icon from "../../images/check.svg";
import {
  UpperContainer,
  BodyContainer,
  ButtonContainer,
  LowerContainer,
  FormContainer,
} from "./styles";

const Certificates = (props) => {
  //Labels that will be displayed on the Button Dropdown component
  const btnDrpNames = {
    certificatesLabel: props.certificatesTabNames.certificatesLabel,
    certificatesButtonLabel: props.certificatesTabNames.certificatesButtonLabel,
    moreButtonText: props.certificatesTabNames.moreButtonText,
  };

  //Hook that will display the errors messages
  const [error, setError] = React.useState({
    teamNameError: false,
    institutionError: false,
    graduationError: false,
  });

  //Submit validation
  function handleSubmit(event) {
    event.preventDefault();
    //the errorHandler will maintain the error hook integrity
    let errorHandler = {
      teamNameError: false,
      institutionError: false,
      graduationError: false,
    };
    if (
      !event.target.elements.teamName.value ||
      !event.target.elements.institution.value ||
      !event.target.elements.graduation.value
    ) {
      event.target.elements.teamName.value
        ? (errorHandler.teamNameError = false)
        : (errorHandler.teamNameError = true);
      event.target.elements.institution.value
        ? (errorHandler.institutionError = false)
        : (errorHandler.institutionError = true);
      event.target.elements.graduation.value
        ? (errorHandler.graduationError = false)
        : (errorHandler.graduationError = true);
      setError(errorHandler);
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
          btnDrpNames={btnDrpNames}
        />
      </UpperContainer>
      <FormContainer id="lcertificateform" onSubmit={handleSubmit}>
        <LowerContainer>
          <Input
            width={"100%"}
            label={props.certificatesTabNames.teamNameLabel + " *"}
            errorMessage={error.teamNameError}
            dValue={
              props.certificatesInfo.teamName
                ? props.certificatesInfo.teamName
                : ""
            }
            id={"teamName"}
          />
          <Input
            width={"100%"}
            label={props.certificatesTabNames.institutionLabel + " *"}
            errorMessage={error.institutionError}
            dValue={
              props.certificatesInfo.institution
                ? props.certificatesInfo.institution
                : ""
            }
            id={"institution"}
          />
          <Input
            width={"100%"}
            label={props.certificatesTabNames.graduationLabel + " *"}
            errorMessage={error.graduationError}
            dValue={
              props.certificatesInfo.graduation
                ? props.certificatesInfo.graduation
                : ""
            }
            id={"graduation"}
          />
        </LowerContainer>
        <ButtonContainer>
          <ButtonComponent
            icon={icon}
            type={"submit"}
            bStyle={{
              width: "100px",
            }}
            wStyle={{
              flexDirection: "row-reverse",
            }}
            bName={props.certificatesTabNames.finishButtonText}
          />
        </ButtonContainer>
      </FormContainer>
    </BodyContainer>
  );
};

export default Certificates;
