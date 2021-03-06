import React from "react";
import PropTypes from "prop-types";
import SCButton from "./styles";

const Button = ({ value, type, clickHandler }) => (
  <SCButton
    type={type}
    onClick={() => {
      clickHandler(value);
    }}
  >
    {value}
  </SCButton>
);
Button.propTypes = {
  value: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: "0",
  section: "",
  clickHandler: (value) => {
    console.log(value);
  },
};

export default Button;
