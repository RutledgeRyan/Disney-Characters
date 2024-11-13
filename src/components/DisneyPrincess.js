import React from "react";
import PropTypes from "prop-types";

const DisneyPrincess = ({ orientation, isAnimated }) => (
  <img
    src="/Princesslogo.jpg"
    alt="Disney Princess"
    className={`absolute top-10 ${orientation}-2 w-16 h-16 ${
      isAnimated ? "animate-bounce" : ""
    }`}
  />
);

DisneyPrincess.propTypes = {
  orientation: PropTypes.oneOf(["left", "right"]).isRequired,
  isAnimated: PropTypes.bool,
};

DisneyPrincess.defaultProps = {
  isAnimated: false,
};

export default DisneyPrincess;