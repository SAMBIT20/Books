import React from "react";
import "./Search.css";

const Search = ({ formSubmit, value, handelSearch, clearSearch }) => {
  return (
    <div className="searchBar-wrap">
      <form onChange={formSubmit}>
        <input
          type="text"
          onChange={handelSearch}
          placeholder="Search Your Book Title"
          value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default Search;
