import React from "react";
import "./EmptyList.css";
import EmptyImg from "./empty.gif";

const EmptyList = () => {
  return (
    <div className="emptyList-wrap">
      <img src={EmptyImg} alt="empty" />
    </div>
  );
};

export default EmptyList;
