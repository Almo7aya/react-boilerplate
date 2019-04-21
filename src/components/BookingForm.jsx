import React from 'react';
import Styled from 'styled-components';
import { Form } from 'react-final-form';

import InputForm from './InputForm';

const StyledFormBox = Styled.div`
  margin: 0 2rem;
  margin-top: 3rem;
  padding: 2rem;
  min-height: 6rem;
  background-color: var(--color-green-dark);
  border-radius: .4rem;
  box-shadow: .3rem 0 1rem .4rem rgba(0, 0, 0, .10);
  :last-of-type {
    margin-bottom: 5rem;
  }
`;

const StyledBoxHeading = Styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const StyledButton = Styled.button`
  &[type="submit"],
  &[type="submit"]:focus {
    background-color: var(--color-brown-dark);
    border: none;
    padding: 1rem 1.2rem;
  }
`;

const onSubmit = (values) => {
  console.log(values);
};
const onValidate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Please enter a valid value';
  } else if (values.password.length < 8) {
    errors.password = 'Password should be grater then 8';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
    errors.password = 'Password should at least has one letter, one number and one special character';
  }
  return errors;
};

export default function () {
  return (
    <div className="frow gutters">
      <Form
        onSubmit={onSubmit}
        validate={onValidate}
        render={
          ({ handleSubmit, form, submitting, pristine, invalid, }) => (
            <form className="col-xs-1-1 col-md-1-2" onSubmit={handleSubmit}>
              <StyledFormBox>
                <StyledBoxHeading>
                  User Details
                </StyledBoxHeading>
                <InputForm label="Name" id="name" name="name" type="text" autoComplete="name" required />
                <InputForm label="Email" id="email" type="email" name="email" autoComplete="email" required />
                <InputForm label="Password" id="password" name="password" type="password" autoComplete="password" required />
                <InputForm label="Bio" id="bio" type="bio" name="bio" />
              </StyledFormBox>
              <StyledFormBox>
                <StyledBoxHeading>
                  Event Details
                </StyledBoxHeading>
                <InputForm label="Event name" id="event-name" name="event-name" type="text" required />
                <InputForm label="Type" id="type" name="type" type="text" placeholder="Birthday, conference talk, wedding, etc." required />
                <InputForm label="Host" id="host" name="host" type="text" required />
                <div className="frow">
                  <InputForm className="col-md-1-2" label="Event start date" id="start_date" name="start_date" type="datetime-local" required />
                  <InputForm className="col-md-1-2" label="Event end date" id="end_date" name="end_date" type="datetime-local" required />
                </div>
                <InputForm label="Location" id="location" name="location" type="text" autoComplete="location" required />
                <InputForm label="Optional message" id="optional_message" name="optional_message" type="text" />
                <div className="frow row-end">
                  <StyledButton type="submit" disabled={invalid}>
                    Submit
                  </StyledButton>
                </div>
              </StyledFormBox>
            </form>
          )
        }
      />
    </div>
  );
}
