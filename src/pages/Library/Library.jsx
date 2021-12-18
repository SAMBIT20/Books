import React from "react";
import Books from "../../components/Library/Books";
import { data } from "../../config/Data";
console.log(data);
const Library = () => {
  return (
    <div>
      <h1>Boosks PAge</h1>
      <Books allbooks={data} />
    </div>
  );
};

export default Library;
