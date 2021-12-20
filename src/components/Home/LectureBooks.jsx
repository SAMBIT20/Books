import React from "react";
import bookimg from "../../assets/bookei.jpg";
import "./Lecture.css";

const LectureBooks = () => {
  return (
    <div className="books-le-wrapper">
      <div className="books-left">
        <img src={bookimg} alt="Img" />
      </div>
      <div className="books-right">
        <h2>LibraryRoom</h2>
        <h3>
          Community driven - making undergraduate content accessible to all
        </h3>
        <ul>
          <li>
            <div>
              <i class="fas fa-chevron-right"></i>
            </div>
            Undergraduates and Postgraduates lack access to quality learning
            Books.
          </li>
          <li>
            <div>
              <i class="fas fa-chevron-right"></i>
            </div>
            There are very few resources on the internet for them to learn from
            and no aggregation platform is present.
          </li>
          <li>
            <div>
              <i class="fas fa-chevron-right"></i>
            </div>
            A community driven platform providing free access for online reading
          </li>
          <li>
            <div>
              <i class="fas fa-chevron-right"></i>
            </div>
            Be popular among the largest student community by sharing your own
            content
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LectureBooks;
