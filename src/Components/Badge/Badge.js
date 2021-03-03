import React from "react";

import PropTypes from "prop-types";

const Badge = ({ type }) => {
  let badgeType =
    type === "empty"
      ? "inline-block bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700 mx-2"
      : type === "sale"
      ? "inline-block bg-red-700 rounded-sm px-2 py-1 text-xs font-semibold text-red-100 mx-2"
      : null;

  return (
    <span className={badgeType}>
      {type === "empty" ? "Out of Stock" : type === "sale" ? "On Sale" : ""}
    </span>
  );
};

export default Badge;

Badge.propTypes = {
  type: PropTypes.oneOf(["sale", "empty"]),
};
