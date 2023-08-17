import React from "react";
import TimetableCard from "../timetableCard/TimetableCard";

const TimetableTitleCard = ({ data }) => {
  return (
    <div>
      <div
        style={{
          marginTop: "15px",
          color: "#cc9200",
          width: "140px",
          borderRadius: "5px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {data._id}
      </div>
      <div>
        {data &&
          data.tripsData.map((item, index) => {
            return <TimetableCard key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default TimetableTitleCard;
