import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, items }) => {
  const searchTerm = (e) => {
    const result = items.filter((item) => {
      return item["name"].toString().toLowerCase().startsWith(e.target.value);
    });
    search(result);
  };

  return (
    <div className="-mt-4 mb-10">
      <form className="mx-auto flex justify-center gap-3">
        <input
          className="w-60 border-b-2 border-gray-200 py-2 px-1 text-gray-700 placeholder-gray-400  leading-tight outline-none focus:border-blue-800"
          type="text"
          placeholder="Search"
          onChange={searchTerm}
        />
        <button className="flex-shrink-0 bg-blue-700 border-blue-700 text-sm font-semibold border-4 text-blue-200 py-1 px-2 rounded hover:bg-blue-800 hover:border-blue-800">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
