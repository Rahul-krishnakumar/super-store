import React from "react";

import PropTypes from "prop-types";

import { ReactComponent as FullStar } from "../../assets/svg/star-full.svg";
import { ReactComponent as HalfStar } from "../../assets/svg/star-half.svg";
import { ReactComponent as EmptyStar } from "../../assets/svg/star-empty.svg";

const Ratings = ({ rating }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push("full");
    } else if (
      i === Math.floor(rating) + 1 &&
      rating - Math.floor(rating) !== 0
    ) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }
  const itemRating = (
    <ul className="flex items-start">
      {stars.map((star, i) => {
        if (star === "full") {
          return (
            <li key={i}>
              <FullStar className="w-7" />
            </li>
          );
        } else if (star === "half") {
          return (
            <li key={i}>
              <HalfStar className="w-5 h-4.5" />
            </li>
          );
        } else {
          return (
            <li key={i}>
              <EmptyStar className="w-5 h-4.5" />
            </li>
          );
        }
      })}
    </ul>
  );
  return <div>{itemRating}</div>;
};

export default Ratings;

Ratings.propTypes = {
  rating: PropTypes.number,
};
