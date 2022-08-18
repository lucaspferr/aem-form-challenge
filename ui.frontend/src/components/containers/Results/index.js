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
        <p>Full Name: {props.basicInfo.fName}</p>
        <p>Email: {props.basicInfo.email}</p>
        <p>Birthday: {props.basicInfo.birthday}</p>
        <p>Age: {props.basicInfo.age}</p>
        <p>GitHub: {props.socialInfo.github}</p>
      </UpperContainer>
      <MiddleContainer>
        <TitleContainer>Certificates:</TitleContainer>

        <List>
          {props.certificatesInfo.certificates.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
      </MiddleContainer>
      <LowerContainer>
        <p>Team Name: {props.certificatesInfo.teamName}</p>
        <p>Team Name: {props.certificatesInfo.teamName}</p>
        <p>Team Name: {props.certificatesInfo.teamName}</p>
      </LowerContainer>
      <ButtonContainer>
        <ButtonComponent
          icon={icon}
          type={"submit"}
          bStyle={buttonStyle}
          wStyle={buttonWrapperStyle}
        />
      </ButtonContainer>
    </BodyContainer>
  );
};

export default Results;
