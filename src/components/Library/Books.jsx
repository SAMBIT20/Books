import React from "react";
import "./Books.css";

const Books = ({ allbooks }) => {
  console.log(allbooks);
  return (
    <div>
      {allbooks.map((data) => (
        <div className="books-container">
          <img src={data.img} alt="img" />
          <h2>{data.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Books;
