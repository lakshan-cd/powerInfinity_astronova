import React from "react";
import "./timetableCard.css";
const TimetableCard = ({ data }) => {
  return (
    <div className="timetable-card">
      from : {data.from.name} <br />
      to: {data.to.name} <br />
      mode: {data.mode}
    </div>
  );
};

export default TimetableCard;
