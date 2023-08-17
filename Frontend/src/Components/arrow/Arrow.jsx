
import React from "react";
import "./arrow.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Arrow = ({ pointer }) => {
  return (
    <div>
      <div className="timetableArrows" >
        {pointer == "<" ? (
          <AiOutlineLeft size={30} />
        ) : (
          <AiOutlineRight size={30} />
        )}
      </div>
    </div>
  );
};

export default Arrow;
