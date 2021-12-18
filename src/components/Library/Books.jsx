import React from "react";
import "./Books.css";

const Books = ({ allbooks }) => {
  console.log(allbooks);
  return (
    <div className="books-container">
      {allbooks.map((data) => (
        <div className="books-wrap">
          <div class="product-card">
            <div class="badge">NEW</div>
            <div class="product-tumb">
              <img src={data.img} alt="" />
            </div>
            <div class="product-details">
              <span class="product-catagory">{data.genres}</span>
              <h4>
                <a href="">{data.title}</a>
              </h4>
              <p>{data.Author}</p>
              <div class="product-bottom-details">
                <div class="product-button">
                  <button>Read Now</button>
                </div>
                <div class="product-links">
                  <a href="">
                    <i class="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
