import React from "react";
import {
  HorizontalList,
  ListButton,
  ListButtonActive,
  ListLines,
} from "./styles";

const NavBar = (props) => {
  let basicNav =
    props.currentStep === 0 ? (
      <ListButtonActive id="basic-button">
        {props.navNames.firstTabName}
      </ListButtonActive>
    ) : (
      <ListButton id="basic-button">{props.navNames.firstTabName}</ListButton>
    );
  let socialNav =
    props.currentStep === 1 ? (
      <ListButtonActive id="social-button">
        {props.navNames.secondTabName}
      </ListButtonActive>
    ) : (
      <ListButton id="social-button">{props.navNames.secondTabName}</ListButton>
    );
  let certificatesNav =
    props.currentStep === 2 ? (
      <ListButtonActive id="certificates-button">
        {props.navNames.thirdTabName}
      </ListButtonActive>
    ) : (
      <ListButton id="certificates-button">
        {props.navNames.thirdTabName}
      </ListButton>
    );

  function handleClick(event) {
    if (event.target.id === "basic-button") {
      if (props.userData.basic.fName) {
        props.setCurrentStep(0);
      }
    } else if (event.target.id === "social-button") {
      if (props.userData.social.github) {
        console.log(props.userData.social);
        props.setCurrentStep(1);
      }
    } else if (event.target.id === "certificates-button") {
      if (props.userData.certificates) {
        props.setCurrentStep(2);
      }
    }
  }

  return (
    <HorizontalList onClick={handleClick}>
      <ListLines>{basicNav}</ListLines>
      <ListLines>{socialNav}</ListLines>
      <ListLines>{certificatesNav}</ListLines>
    </HorizontalList>
  );
};

export default NavBar;
