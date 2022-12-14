import React from "react";
import {
  DropdownContainer,
  DropButton,
  DropList,
  RemoveItem,
  TextItem,
  MoreButton,
  DropBtnIcon,
  DropBtnText,
  Container,
  MoreBtnText,
  ListForm,
  InvalidContainer,
} from "./styles";
import arrowDown from "../../images/arrow-down.svg";
import plus from "../../images/plus.svg";
import arrowRight from "../../images/chevron-right.svg";
import Input from "../Input";

const ButtonDropdown = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [invalidInput, setInvalidInput] = React.useState("");
  const displayNone = {
    display: "none",
  };
  const displayFlex = {
    display: "flex",
  };
  const [showButton, setShowButton] = React.useState(displayNone);

  //Function to remove item from list
  function handleDrop(event) {
    event.preventDefault();
    let newList = props.certificatesList.filter(
      (item) => item !== props.certificatesList.at(event.target.id)
    );
    props.setCertificatesInfo({
      certificates: newList,
    });
    if (newList.length === 0) {
      setShowButton(displayNone);
      setIsOpen(false);
    }
  }

  //Function to add item to list
  function handleMore(event) {
    event.preventDefault();
    let certificateInput = event.target.elements.certificate.value;
    if (!certificateInput || certificateInput.indexOf(" ") >= 0) {
      setInvalidInput(messages.empty);
    } else if (props.certificatesList.length === 5) {
      setInvalidInput(messages.moreThanFive);
    } else if (props.certificatesList.includes(certificateInput)) {
      setInvalidInput(messages.duplicate);
    } else {
      props.setCertificatesInfo({
        certificates: [...props.certificatesList, certificateInput],
      });
      setShowButton(displayFlex);
      setInvalidInput("");
    }
  }

  //Function to attribuate the correct message to invalid cases
  function EmptyOrWhiteSpace() {
    return <p>Empty certificate is not allowed</p>;
  }
  function MoreThanFive() {
    return (
      <p>
        Sorry, only 5 certificates are allowed.
        <br /> You can remove one certificate instead
      </p>
    );
  }
  function Duplicate() {
    return <p>This certificate is already in the list</p>;
  }
  const messages = {
    empty: EmptyOrWhiteSpace,
    moreThanFive: MoreThanFive,
    duplicate: Duplicate,
  };

  return (
    <ListForm onSubmit={handleMore}>
      <DropdownContainer>
        <Input
          width={"100%"}
          label={props.btnDrpNames.certificatesLabel}
          id={"certificate"}
          onChange={handleMore}
        />
        <Container>
          <DropButton
            onClick={() => setIsOpen(!isOpen)}
            type={"button"}
            style={showButton}
          >
            <DropBtnText>
              {props.btnDrpNames.certificatesButtonLabel}
            </DropBtnText>
            <DropBtnIcon src={arrowDown} alt="arrow-down" />
          </DropButton>
          {isOpen && (
            <DropList>
              {props.certificatesList.map((item, index) => (
                <li key={index}>
                  <TextItem>{item}</TextItem>
                  <RemoveItem onClick={handleDrop} id={index}>
                    X
                  </RemoveItem>
                </li>
              ))}
            </DropList>
          )}
        </Container>
        <MoreButton type={"submit"}>
          <DropBtnIcon src={plus} alt="plus" style={{ height: "14px" }} />
          <MoreBtnText>{props.btnDrpNames.moreButtonText}</MoreBtnText>
          <DropBtnIcon
            src={arrowRight}
            alt="arrow-right"
            style={{ height: "18px" }}
          />
        </MoreButton>
      </DropdownContainer>
      <InvalidContainer>
        <div>{invalidInput}</div>
      </InvalidContainer>
    </ListForm>
  );
};

export default ButtonDropdown;
