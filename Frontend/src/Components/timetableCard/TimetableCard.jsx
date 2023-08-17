import React from "react";

const TimetableCard = ({ name }) => {
  return (
    <div
      style={{
        color: "black",
        backgroundColor: "white",
        height: "180px",
        width: "140px",
        borderRadius: "5px",
        margin: "10px",
      }}>
      {name}
    </div>
  );
};

export default TimetableCard;
