import React, { useState } from "react";
import EmptyList from "../../components/EmptyCart/EmptyList";
import Books from "../../components/Library/Books";
import Search from "../../components/Search/Search";
import { data } from "../../config/Data";

import "./Library.css";
const Library = () => {
  const [books, setBooks] = useState(data);
  const [searchKey, setSearchKey] = useState("");

  //Search Submit
  const handelSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  //Search for blogs by catagory
  const handleSearchResults = () => {
    const allBooks = data;
    const filteredBlogs = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBooks(filteredBlogs);
  };
  console.log(books);
  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBooks(data);
    setSearchKey("");
  };

  return (
    <div className="books-wrapper">
      <div className="heading-books">
        <h2>Digital Learning Ecosystem</h2>
        <h3>BY EDUPRENEURS | FOR EDUCATORS | OF EDUCATION</h3>
      </div>

      <div className="Search-container">
        <Search
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handelSearchSubmit}
          handelSearch={(e) => setSearchKey(e.target.value)}
        />
      </div>

      {!books.length ? <EmptyList /> : <Books allbooks={books} />}
    </div>
  );
};

export default Library;
