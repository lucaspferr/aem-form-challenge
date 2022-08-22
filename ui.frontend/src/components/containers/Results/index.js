import React from "react";
import {
  BodyContainer,
  ButtonContainer,
  FormContainer,
  List,
  LowerContainer,
  MiddleContainer,
  TitleContainer,
  UpperContainer,
} from "./styles";
import ButtonComponent from "../../micro/Button";
import icon from "../../images/check.svg";

const Results = (props) => {
  const buttonStyle = {
    width: "100px",
  };
  const buttonWrapperStyle = {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  };
  //Check if there is certificates data
  const certificatesContainer =
    props.certificatesInfo.certificates.length > 0 ? (
      <MiddleContainer>
        <TitleContainer>
          {props.resultTabNames.certificatesLabel}:
        </TitleContainer>
        <List>
          {props.certificatesInfo.certificates.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
      </MiddleContainer>
    ) : null;
  //Check if there is nickname data
  const nickName = props.basicInfo.nName ? (
    <React.Fragment>
      {props.resultTabNames.nickNameLabel} :{props.basicInfo.nName}
      <br />
    </React.Fragment>
  ) : null;
  //Check if there is phone data
  const phone = props.basicInfo.phone ? (
    <React.Fragment>
      {props.resultTabNames.phoneLabel} :{props.basicInfo.phone}
      <br />
    </React.Fragment>
  ) : null;
  //Check if there is linkedin data
  const linkedin = props.socialInfo.linkedin ? (
    <React.Fragment>
      {props.resultTabNames.linkedinLabel} :{props.socialInfo.linkedin}
      <br />
    </React.Fragment>
  ) : null;

  function handleSubmit(event) {
    event.preventDefault();
    //Clear the state of all the fields
    props.setBasicInfo({
      fName: "",
      nName: "",
      email: "",
      phone: "",
      birthday: "",
      age: "",
    });
    props.setSocialInfo({
      linkedin: "",
      github: "",
    });
    props.setBirthdate({
      day: "",
      month: "",
      year: "",
    });
    props.setCertificatesInfo({
      certificates: [],
      teamName: "",
      institution: "",
      graduation: "",
    });
    props.setCurrentStep(0);
  }
  return (
    <FormContainer id="results-form" onSubmit={handleSubmit}>
      <BodyContainer>
        <UpperContainer>
          <p>Your data has been sent successfully!</p>
          <p>
            {props.resultTabNames.fullNameLabel}: {props.basicInfo.fName}
            <br />
            {nickName}
            {props.resultTabNames.emailLabel}: {props.basicInfo.email}
            <br />
            {phone}
            {props.resultTabNames.birthdayLabel}: {props.birthday}
            <br />
            {props.resultTabNames.ageLabel}: {props.basicInfo.age}
            <br />
            {linkedin}
            {props.resultTabNames.githubLabel}: {props.socialInfo.github}
          </p>
        </UpperContainer>
        {certificatesContainer}
        <LowerContainer>
          <p>
            {props.resultTabNames.teamNameLabel}:{" "}
            {props.certificatesInfo.teamName}
          </p>
          <p>
            {props.resultTabNames.institutionLabel}:{" "}
            {props.certificatesInfo.institution}
          </p>
          <p>
            {props.resultTabNames.graduationLabel}:{" "}
            {props.certificatesInfo.graduation}
          </p>
        </LowerContainer>
      </BodyContainer>
      <ButtonContainer>
        <ButtonComponent
          icon={icon}
          type={"submit"}
          bStyle={buttonStyle}
          wStyle={buttonWrapperStyle}
          bName={props.resultTabNames.returnButtonText}
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default Results;
