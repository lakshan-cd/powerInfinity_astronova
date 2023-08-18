import React, { useState } from "react";
import "./timetableCard.css";
import TimetableModel from "../TimetableModel/TimetableModel";

const TimetableCard = ({ data }) => {
  const [openModel,setOpenModel]=useState(false);
  return (
    <div>
      {openModel && <TimetableModel data={data} setOpenModel={setOpenModel} />}

      <div className="timetable-card" onClick={() => setOpenModel(true)}>
        from: {data.from.name} <br />
        to: {data.to.name} <br />
        mode: {data.mode}
      </div>
    </div>
  );
};

export default TimetableCard;
