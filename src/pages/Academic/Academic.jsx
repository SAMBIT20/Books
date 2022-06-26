import React from "react";

import Pdf from "../../assets/academic/Academic Calendar for Even Semester 2021-22.pdf";
import Holidays from "../../assets/academic/List of Holidays for Vacational Staff under BPUT for the year 2022.pdf";

const Academic = () => {
  return (
    <div className="my-5">
      <h2 className="academic">Academic Calendar & Holidays List 2022</h2>

      <div className="pdf-viwer">
        <div className="acdamic-calender">
          <iframe
            title="pdf"
            src={Pdf}
            frameborder="0"
            width="600px"
            height="800px"
          ></iframe>
        </div>
        <div className="acdamic-calender">
          <iframe
            title="pdf"
            src={Holidays}
            frameborder="0"
            width="600px"
            height="800px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Academic;
