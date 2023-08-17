import React from "react";
import NavBar from "../../Components/NavBar";
import "./tripShedule.css";
// import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";


const TripSchedule = () => {
  const [date, setDate] = useState(null);

  const onChange = (date) => {
    console.log(date);
    setDate(date);
  };

  return (
    <div>
      <NavBar />
      <div className="scheduleContainer">
        <div className="filterContainer">
          <div className="filterBox">
            <div style={{}}>
              <Calendar onChange={onChange} value={date} />
            </div>
          </div>
        </div>
        <div className="timeTableContainer">
          <div className="timeTableText">
            <h2>Time table</h2>
          </div>
          <div className="timeTableBox">
            

<div style={{color:'black', backgroundColor:"white",height:'80px',width:'140px',borderRadius:'5px', margin:"10px"}}>fsdfs</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSchedule;