import React from "react";

const ItemCard = ({ itemData }) => {
  return (
    <div className="w-full mt-4 border-2 rounded-md shadow-sm p-5 flex flex-col">
      <img
        src={itemData.imageUrl}
        alt={itemData.name}
        className="w-full h-48"
      />
      <h3 className="text-lg font-semibold mt-10">{itemData.name}</h3>
      <div>
        <span className="mr-4">{itemData.avgRating}</span>
        <span>{itemData.stockCount}</span>
      </div>
      <div>
        <span className="mr-4 font-medium">&#36;{itemData.price}</span>
        <span>badge</span>
      </div>
      <button className="w-4/5 mt-5 mx-auto p-2 bg-purple-900 rounded text-purple-200">
        View Item
      </button>
    </div>
  );
};

export default ItemCard;
