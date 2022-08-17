import React from "react";
import { BodyContainer, ContentContainer } from "./styles";
import { MapTo } from "@adobe/aem-react-editable-components";
import NavBar from "../../micro/NavBar";

const FormComponent = (props) => {
  //Variables for changing names [AEM]
  const navNames = {
    //NavBar names
    firstTabName: props.firstTabName,
    secondTabName: props.secondTabName,
    thirdTabName: props.thirdTabName,
  };
  const basicTabNames = {
    //Basic tab names (first tab)
    fullNameLabel: props.fullNameLabel,
    nickNameLabel: props.nickNameLabel,
    emailLabel: props.emailLabel,
    phoneLabel: props.phoneLabel,
    termsLabel: props.termsLabel,
    birthdayLabel: props.birthdayLabel,
    dayLabel: props.dayLabel,
    monthLabel: props.monthLabel,
    yearLabel: props.yearLabel,
    ageLabel: props.ageLabel,
    nextButtonText: props.nextButtonText,
  };
  const socialTabNames = {
    //Social tab names (second tab)
    linkedinLabel: props.linkedinLabel,
    githubLabel: props.githubLabel,
    nextButtonText: props.nextButtonText,
  };
  const certificatesTabNames = {
    //Certificates tab names (third tab)
    certificatesLabel: props.certificatesLabel,
    certificatesButtonLabel: props.certificatesButtonLabel,
    moreButtonText: props.moreButtonText,
    teamNameLabel: props.teamNameLabel,
    institutionLabel: props.institutionLabel,
    graduationLabel: props.graduationLabel,
    finishButtonText: props.finishButtonText,
  };
  const returnTabNames = {
    //Return tab names (fourth tab)
    fullNameLabel: props.fullNameLabel,
    emailLabel: props.emailLabel,
    birthdayLabel: props.birthdayLabel,
    ageLabel: props.ageLabel,
    githubLabel: props.githubLabel,
    certificatesLabel: props.certificatesLabel,
    teamNameLabel: props.teamNameLabel,
    institutionLabel: props.institutionLabel,
    graduationLabel: props.graduationLabel,
    returnButtonText: props.returnButtonText,
  };

  return (
    <BodyContainer>
      <ContentContainer>
        <NavBar
          // firstTabName={props.firstTabName}
          // secondTabName={props.secondTabName}
          // thirdTabName={props.thirdTabName}
          navNames={navNames}
        />
      </ContentContainer>
    </BodyContainer>
  );
};

//Default names
FormComponent.defaultProps = {
  firstTabName: "Basic",
  secondTabName: "Social",
  thirdTabName: "Certificates",
  nextButtonText: "Next",
  finishButtonText: "Finish",
  returnButtonText: "Return",
  fullNameLabel: "Full Name *",
  nickNameLabel: "Nickname",
  emailLabel: "Email *",
  phoneLabel: "Phone",
  termsLabel: "I accept the terms and privacy",
  birthdayLabel: "Birthday *",
  dayLabel: "Day",
  monthLabel: "Month",
  yearLabel: "Year",
  ageLabel: "Age",
  linkedinLabel: "Linkedin",
  githubLabel: "Github *",
  certificatesLabel: "Certificates",
  certificatesButtonLabel: "Certificates",
  moreButtonText: "More",
  teamNameLabel: "Team Name *",
  institutionLabel: "Institution *",
  graduationLabel: "Graduation *",
};

export default MapTo("formapp/components/form-component")(FormComponent);
