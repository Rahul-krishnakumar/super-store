import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const SearchBar = ({ search, items }) => {
  const [text, setText] = useState("");
  const searchTerm = (str, itemList) => {
    const result = itemList.filter((item) => {
      return item["name"].toString().toLowerCase().startsWith(str);
    });
    search(result);
  };

  const resetField = (e) => {
    e.preventDefault();
    if (text !== "") {
      setText("");
      searchTerm("", items);
    }
  };

  return (
    <div className="-mt-4 mb-10">
      <form className="w-80 mx-auto flex justify-center gap-3 border-b-2 pb-1.5 border-gray-200">
        <span className="flex justify-center items-center">
          <FaSearch className="" />
        </span>
        <input
          className="w-72 py-2 px-1 text-gray-700 placeholder-gray-400  leading-tight outline-none focus:border-blue-800"
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => {
            searchTerm(e.target.value, items);
            setText(e.target.value);
          }}
        />
        <button
          className="bg-gray-700 border-gray-700 text-sm font-semibold border-4 text-blue-200 py-1 px-2 rounded hover:bg-gray-800 hover:border-gray-800"
          onClick={resetField}
        >
          <IoCloseSharp />
        </button>
        {/* <button
          onSubmit={(e) => e.preventDefault()}
          className="flex-shrink-0 bg-blue-700 border-blue-700 text-sm font-semibold border-4 text-blue-200 py-1 px-2 rounded hover:bg-blue-800 hover:border-blue-800"
        > */}
        {/* </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
