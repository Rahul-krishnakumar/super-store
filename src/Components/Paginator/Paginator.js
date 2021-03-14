import React from "react";

const Paginator = ({ currentPage, paginate, totalPages }) => {
  return (
    <div className="flex justify-center gap-2 max-w-xs mx-auto my-10">
      <button
        className="border-2 border-gray-200 shadow-sm rounded bg-gray-200 text-gray-900 font-semibold px-2 py-1"
        onClick={() => paginate(1)}
      >
        Start
      </button>
      {currentPage !== 1 ? (
        <button
          className="w-8 border-2 border-gray-200 shadow-sm rounded bg-gray-200 text-gray-900 font-semibold px-2 py-1"
          onClick={() => paginate(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      ) : null}
      <button
        className="w-8 border-2 border-gray-900 rounded bg-gray-900 text-gray-100 font-semibold px-2 py-1"
        onClick={() => paginate(currentPage)}
      >
        {currentPage}
      </button>
      {currentPage !== totalPages ? (
        <button
          className="w-8 border-2 border-gray-200 shadow-sm rounded bg-gray-200 text-gray-900 font-semibold px-2 py-1"
          onClick={() => paginate(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      ) : null}
      <button
        className="border-2 border-gray-200 shadow-sm rounded bg-gray-200 text-gray-900 font-semibold px-2 py-1"
        onClick={() => paginate(totalPages)}
      >
        End
      </button>
    </div>
  );
};

export default Paginator;
