import React from "react";
import "./Books.css";
import { useNavigate } from "react-router-dom";

const Books = ({ allbooks }) => {
  let navigate = useNavigate();

  return (
    <div className="books-container">
      {allbooks.map((data) => (
        <div className="books-wrap" key={data.id}>
          <div className="product-card">
            <div className="badge">NEW</div>
            <div className="product-tumb">
              <img src={data.img} alt="" />
            </div>
            <div className="product-details">
              <span className="product-catagory">{data.genres}</span>
              <h4>
                <a href="">{data.title}</a>
              </h4>
              <p>{data.Author}</p>
              <div className="product-bottom-details">
                <div className="product-button">
                  <button
                    onClick={() => {
                      navigate(`/read/${Math.random()}`, {
                        state: { pdffile: data.pdf },
                      });
                    }}
                  >
                    Read Now
                  </button>
                </div>
                <div className="product-links">
                  <a href="">
                    <i className="fa fa-heart"></i>
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
