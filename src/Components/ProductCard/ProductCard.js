import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Ratings from "../Ratings/Ratings";
import Badge from "../Badge/Badge";

const ItemCard = ({ itemData }) => {
  const {
    imageUrl,
    name,
    avgRating,
    stockCount,
    isOnSale,
    price,
    _id,
  } = itemData;
  let badge = stockCount === 0 ? "empty" : isOnSale ? "sale" : null;
  return (
    <div className="w-full mt-4 border-2 rounded-md shadow-sm p-5 flex flex-col">
      <img src={imageUrl} alt={name} className="w-full h-48" />
      <h3 className="text-lg font-semibold mt-10">{name}</h3>
      <div className="flex justify-between -ml-1">
        <Ratings rating={avgRating} />
        <Badge type={badge} />
      </div>
      <div>
        <span className="inline-block mt-2 font-semibold">&#36;{price}</span>
      </div>
      <div className="flex justify-evenly">
        <Link
          to={`/item/${_id}`}
          className="inline-block mt-5 p-2 bg-indigo-600 rounded text-indigo-50 font-semibold"
        >
          View Item
        </Link>
        <Link
          to={`/item/${_id}`}
          className="inline-block mt-5 p-2 bg-yellow-400 rounded text-yellow-900 font-semibold"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  itemData: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    avgRating: PropTypes.number,
    stockCount: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default ItemCard;
