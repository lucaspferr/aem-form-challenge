import React from "react";
import { SelectContainer, SelectBox, SelectLabel, AgeBox } from "./styles";

const Birthday = (props) => {
  //get the current year
  const firstYear = new Date().getFullYear() - 115;
  const [birthday, setBirthday] = React.useState({
    day: 1,
    month: 1,
    year: firstYear,
  });

  const handleChange = (event) => {
    let newBirthday = { ...birthday, [event.target.id]: event.target.value };
    setBirthday(newBirthday);

    let newAge = new Date().getFullYear() - newBirthday.year;
    if (new Date().getMonth() < newBirthday.month - 1) {
      newAge--;
    }
    if (
      newBirthday.month - 1 === new Date().getMonth() &&
      new Date().getDate() < newBirthday.day
    ) {
      newAge--;
    }
    props.setBirthdate(newBirthday);
    props.setBasicInfo({ age: newAge });
  };
  return (
    <React.Fragment>
      <SelectContainer>
        <SelectLabel>{props.birthdayNames.dayLabel}</SelectLabel>
        <SelectBox
          id="day"
          onChange={handleChange}
          defaultValue={
            props.birthdate.day ? props.birthdate.day : birthday.day
          }
        >
          {[...Array(31)].map((_, i) => (
            <option key={"day" + i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </SelectBox>
      </SelectContainer>
      <SelectContainer>
        <SelectLabel>{props.birthdayNames.monthLabel}</SelectLabel>
        <SelectBox
          id="month"
          onChange={handleChange}
          defaultValue={
            props.birthdate.month ? props.birthdate.month : birthday.month
          }
        >
          {[...Array(12)].map((_, i) => (
            <option key={"month" + i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </SelectBox>
      </SelectContainer>
      <SelectContainer>
        <SelectLabel>{props.birthdayNames.yearLabel}</SelectLabel>
        <SelectBox
          id="year"
          onChange={handleChange}
          defaultValue={
            props.birthdate.year ? props.birthdate.year : birthday.year
          }
        >
          {[...Array(115)].map((_, i) => (
            <option key={"year" + (i + firstYear)} value={i + firstYear + 1}>
              {i + firstYear + 1}
            </option>
          ))}
        </SelectBox>
      </SelectContainer>
      <SelectContainer>
        <SelectLabel>{props.birthdayNames.ageLabel}</SelectLabel>
        <AgeBox
          disabled
          value={props.basicInfo.age ? props.basicInfo.age : ""}
          id="age"
        />
      </SelectContainer>
    </React.Fragment>
  );
};

export default Birthday;
