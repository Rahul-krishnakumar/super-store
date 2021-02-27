import React from "react";

const ItemCard = ({ image }) => {
  return (
    <div className="w-full mt-4 border-2 rounded-md shadow px-5 py-2">
      <img
        src={image}
        alt="{card}"
        className="w-full border-b border-black h-1/2"
      />
      <div className="mx-auto my-2">
        <h2>Item name</h2>
        <span className="mx-2">Item rating</span>
        <span>No of ratings</span>
        <br />
        <span className="mr-2">Item price</span>
        <span>badge</span>
        <br />
        <button>View Item</button>
      </div>
    </div>
  );
};

export default ItemCard;
