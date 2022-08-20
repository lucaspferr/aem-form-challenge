import React from "react";
import {
  BodyContainer,
  ButtonContainer,
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
  return (
    <BodyContainer>
      <UpperContainer>
        <p>Your data has been sent successfully!</p>
        <p>
          {props.resultTabNames.fullNameLabel}: {props.basicInfo.fName}
        </p>
        <p>
          {props.resultTabNames.emailLabel}: {props.basicInfo.email}
        </p>
        <p>
          {props.resultTabNames.birthdayLabel}: {props.basicInfo.birthday}
        </p>
        <p>
          {props.resultTabNames.ageLabel}: {props.basicInfo.age}
        </p>
        <p>
          {props.resultTabNames.githubLabel}: {props.socialInfo.github}
        </p>
      </UpperContainer>
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
      <ButtonContainer>
        <ButtonComponent
          icon={icon}
          type={"submit"}
          bStyle={buttonStyle}
          wStyle={buttonWrapperStyle}
          bName={props.resultTabNames.returnButtonText}
        />
      </ButtonContainer>
    </BodyContainer>
  );
};

export default Results;
