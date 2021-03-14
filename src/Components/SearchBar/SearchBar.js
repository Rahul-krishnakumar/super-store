import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const SearchBar = ({ search }) => {
  const [text, setText] = useState("");
  const searchTerm = (e) => {
    e.preventDefault();
    console.log(text);
    search(text);
  };

  const resetField = (e) => {
    e.preventDefault();
    if (text !== "") search("");
    setText("");
  };

  const inputHandler = (e) => {
    if (e.which === 13) {
      searchTerm(e);
    } else if (e.which === 27) {
      resetField(e);
    }
  };

  return (
    <div className="mb-5">
      <form
        onSubmit={searchTerm}
        className="w-80 mx-auto flex justify-center gap-3 border-b-2 pb-1.5 border-gray-200"
      >
        <input
          className="w-72 py-2 px-1 text-gray-700 placeholder-gray-400  leading-tight outline-none focus:border-blue-800"
          type="text"
          placeholder="Search"
          value={text}
          onKeyDown={inputHandler}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={resetField}
          className="flex justify-center items-center"
        >
          <IoCloseSharp />
        </button>
        <button
          type="submit"
          className="bg-gray-700 border-gray-700 text-sm font-semibold border-4 text-blue-200 py-1 px-2 rounded hover:bg-gray-800 hover:border-gray-800"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
