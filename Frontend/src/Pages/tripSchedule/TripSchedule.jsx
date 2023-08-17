import React from "react";
import NavBar from "../../Components/NavBar";
import "./tripSchedule.css";
// import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import TimetableCard from "../../Components/timetableCard/TimetableCard";
import Carousel, { consts } from "react-elastic-carousel";
import Arrow from "../../Components/arrow/Arrow";



const TripSchedule = () => {
  const [date, setDate] = useState(null);

  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 500,
      itemsToShow: 3,
    },
    {
      width: 760,
      itemsToShow: 5,
    },
    {
      width: 1200,
      itemsToShow: 6,
    },
  ];

  const onChange = (date) => {
    console.log(date);
    setDate(date);
  };





const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? "<" : ">";
  return (
    <div onClick={onClick} disabled={isEdge}>
      <Arrow pointer={pointer} />
    </div>
  );
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
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
              renderArrow={myArrow}>
              <TimetableCard name="1" />
              <TimetableCard name="1" />
              <TimetableCard name="1" />
              <TimetableCard name="1" />
              <TimetableCard name="1" />
              <TimetableCard name="1" />
              <TimetableCard name="1" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSchedule;
