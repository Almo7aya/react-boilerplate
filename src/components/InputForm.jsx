import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const FormInput = ({
  className, label, type, placeholder, id, onChange, autoComplete, required,
}) => (
  <label className={className} htmlFor={id}>
    {required ? (
      <span>
        {label}
        *
      </span>
    ) : (
      <span>
        {label}
      </span>
    )}
    <Field
      type={type}
      placeholder={placeholder}
      id={id}
      autoComplete={autoComplete}
      required={required}
      name={id}
      component="input"
    />
  </label>
);

const StyledFormInput = Styled(FormInput)`
  color: var(--color-light);
  input,
  input:hover,
  input:active,
  input:focus {
    border-bottom-color: var(--color-light);
    color: var(--color-light);
    ::placeholder {
      color: var(--color-text-gray);
    }
  }
  .required {
    color: red;
  }
`;

export default StyledFormInput;

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  autoComplete: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  onChange: () => null,
  autoComplete: '',
  placeholder: '',
  required: false,
};
