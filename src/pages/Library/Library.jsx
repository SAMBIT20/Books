import React from "react";
import Books from "../../components/Library/Books";
import { data } from "../../config/Data";
import "./Library.css";
console.log(data);
const Library = () => {
  return (
    <div className="books-wrapper">
      <div className="heading-books">
        <h2>Digital Learning Ecosystem</h2>
        <h3>BY EDUPRENEURS | FOR EDUCATORS | OF EDUCATION</h3>
      </div>

      <div className="Search-container">
        <input type="text" placeholder="Type Book Name For Search" />
        <button className="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <Books allbooks={data} />
    </div>
  );
};

export default Library;
