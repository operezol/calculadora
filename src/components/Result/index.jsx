import React from "react";
import PropTypes from "prop-types";
import SCResult from "./styles";

const Result = ({ value }) => {
  return <SCResult>{value}</SCResult>;
};

Result.propTypes = {
  value: PropTypes.string.isRequired,
};

Result.defaultProps = {
  value: "0",
};

export default Result;
