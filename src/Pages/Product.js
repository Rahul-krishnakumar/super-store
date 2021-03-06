import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../Components/Navbar/Navbar";
import Rating from "../Components/Ratings/Ratings";
import Badge from "../Components/Badge/Badge";
import Spinner from "../Components/Spinner/Spinner";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://gp-super-store-api.herokuapp.com/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <NavBar
        links={[
          { Home: "/", id: 1 },
          { Deals: "/deals", id: 2 },
          { Cart: "/cart", id: 3 },
        ]}
      />
      {!isLoading ? (
        <div className="md:max-w-5xl max-w-3xl mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
          <div className="md:max-w-md ml-4 flex md:justify-end justify-center">
            <img
              className="w-80 mr-2 max-h-80"
              src={productData.imageUrl}
              alt={productData.name}
            />
          </div>
          <div className="max-w-xs">
            <h1 className="text-lg font-semibold mt-10 mb-1 flex items-center justify-between">
              {productData.name}
              {productData.isOnSale && productData.stockCount > 0 ? (
                <Badge type="sale" />
              ) : productData.stockCount === 0 ? (
                <Badge type="empty" />
              ) : null}
            </h1>
            <Rating rating={productData.avgRating} />
            <hr className="border-gray-500 border-b-1 my-2" />
            <p className="text-sm text-gray-700">{productData.description}</p>
            <p className="my-2 font-semibold">&#36;{productData.price}</p>
            <div>
              <p className="mb-3 text-sm text-gray-700 font-semibold">
                {productData.stockCount > 0
                  ? `${productData.stockCount} in stock`
                  : null}
              </p>
              <span className="mr-1 text-sm text-gray-800">Quantity:</span>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border border-gray-700 rounded-sm outline-none p-1.5 text-gray-700 text-xs text-center w-12"
              />
              {quantity <= 0 || isNaN(quantity) ? (
                <p className="mt-1.5 text-xs text-red-600">
                  Please enter a valid quantity
                </p>
              ) : null}
            </div>
            <button className="mt-5 px-3 py-2 bg-yellow-400 rounded text-yellow-900 font-semibold">
              Add to Cart
            </button>
            {quantity > productData.stockCount ? (
              <p className="mt-5 px-2 py-1 rounded-sm bg-red-300 text-red-800">
                Insufficient stock!
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Product;
