import React from "react";
import { BodyContainer, ContentContainer, Title } from "./styles";
import { MapTo } from "@adobe/aem-react-editable-components";
import NavBar from "../../micro/NavBar";
import Basic from "../Basic";
import Social from "../Social";
import Certificates from "../Certificates";
import Results from "../Results";

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
  const resultTabNames = {
    //Result tab names (fourth tab)
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

  //Hook responsible for the step logic
  const [currentStep, setCurrentStep] = React.useState(0);

  //Hooks containing the basic, social and certificates info
  const [basicInfo, setBasicInfo] = React.useState({
    fName: "",
    nName: "",
    email: "",
    phone: "",
    birthday: "",
    age: "",
  });
  const [socialInfo, setSocialInfo] = React.useState({
    linkedin: "",
    github: "",
  });
  const [certificatesInfo, setCertificatesInfo] = React.useState({
    certificates: [],
    teamName: "",
    institution: "",
    graduation: "",
  });
  const [birthdate, setBirthdate] = React.useState({
    day: "",
    month: "",
    year: "",
  });

  //Variable responsible for storing form data
  const userData = {
    basic: basicInfo,
    social: socialInfo,
    certificates: certificatesInfo,
  };
  //Variable and function responsible for attribuating the component to the current step
  let currentStepContent;
  switch (currentStep) {
    case 0:
      currentStepContent = (
        <React.Fragment>
          <Title>{props.mainTitle}</Title>
          <NavBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            userData={userData}
            navNames={navNames}
          />
          <Basic
            basicInfo={basicInfo}
            setBasicInfo={setBasicInfo}
            birthdate={birthdate}
            setBirthdate={setBirthdate}
            setCurrentStep={setCurrentStep}
            basicTabNames={basicTabNames}
          />
        </React.Fragment>
      );
      break;
    case 1:
      currentStepContent = (
        <React.Fragment>
          <Title>Team SignUp</Title>
          <NavBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            userData={userData}
            navNames={navNames}
          />
          <Social
            socialInfo={socialInfo}
            setSocialInfo={setSocialInfo}
            setCurrentStep={setCurrentStep}
            socialTabNames={socialTabNames}
          />
        </React.Fragment>
      );
      break;
    case 2:
      currentStepContent = (
        <React.Fragment>
          <Title>Team SignUp</Title>
          <NavBar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            userData={userData}
            navNames={navNames}
          />
          <Certificates
            certificatesInfo={certificatesInfo}
            setCertificatesInfo={setCertificatesInfo}
            setCurrentStep={setCurrentStep}
            certificatesTabNames={certificatesTabNames}
          />
        </React.Fragment>
      );
      break;
    case 3:
      currentStepContent = (
        <Results
          basicInfo={basicInfo}
          socialInfo={socialInfo}
          certificatesInfo={certificatesInfo}
          resultTabNames={resultTabNames}
        />
      );
      break;
    default:
      currentStepContent = (
        <Basic basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
      );
      break;
  }
  return (
    <BodyContainer>
      <ContentContainer>{currentStepContent}</ContentContainer>
    </BodyContainer>
  );
};

//Default names
FormComponent.defaultProps = {
  mainTitle: "Team SignUp",
  firstTabName: "Basic",
  secondTabName: "Social",
  thirdTabName: "Certificates",
  nextButtonText: "Next",
  finishButtonText: "Finish",
  returnButtonText: "Return",
  fullNameLabel: "Full Name",
  nickNameLabel: "Nickname",
  emailLabel: "Email",
  phoneLabel: "Phone",
  termsLabel: "I accept the terms and privacy",
  birthdayLabel: "Birthday",
  dayLabel: "Day",
  monthLabel: "Month",
  yearLabel: "Year",
  ageLabel: "Age",
  linkedinLabel: "Linkedin",
  githubLabel: "Github",
  certificatesLabel: "Certificates",
  certificatesButtonLabel: "Certificates",
  moreButtonText: "More",
  teamNameLabel: "Team Name",
  institutionLabel: "Institution",
  graduationLabel: "Graduation",
};

export default MapTo("formapp/components/form-component")(FormComponent);
