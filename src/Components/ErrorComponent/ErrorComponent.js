import React from "react";
import PropTypes from "prop-types";

const ErrorComponent = ({ message }) => {
  return (
    <div className="flex justify-center items-center mt-40">
      <h1 className="text-4xl">{message}</h1>
    </div>
  );
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  message: PropTypes.string,
};
