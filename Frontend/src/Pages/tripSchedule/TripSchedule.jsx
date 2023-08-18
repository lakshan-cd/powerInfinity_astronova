import React, { useEffect, useRef } from "react";
import NavBar from "../../Components/NavBar";
import "./tripSchedule.css";
// import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import TimetableTitleCard from "../../Components/timetableTitleCard/TimetableTitleCard";
import Carousel, { consts } from "react-elastic-carousel";
import Arrow from "../../Components/arrow/Arrow";
import axios from "axios";

const TripSchedule = () => {
  const carouselRef = useRef(null);
  const [date, setDate] = useState(null);
  const [timetableData, setTimetableData] = useState([]);
  useEffect(() => {
    const getTimetableDetails = async () => {
      await axios
        .get("http://localhost:4000/api/trip/getAllTrips")
        .then((res) => {
          console.log("tt", res.data);
          setTimetableData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTimetableDetails();
  }, []);

  useEffect(() => {
    const refMap = {};
    timetableData.forEach((data, index) => {
      refMap[data._id] = index;
    });
    if (carouselRef.current) {
      carouselRef.current.refMap = refMap;
    }
    scrollToItem("2023-08-12");
  }, [timetableData]);

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

  const scrollToItem = (_id) => {
    if (carouselRef.current && carouselRef.current.refMap) {
      const index = carouselRef.current.refMap[_id];
      if (index !== undefined) {
        carouselRef.current.goTo(index);
      }
    }
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
            <h2>Timetable</h2>
          </div>
          <div className="timeTableBox">
            <Carousel
              ref={carouselRef}
              breakPoints={breakPoints}
              pagination={false}
              renderArrow={myArrow}>
              {timetableData.map((data, index) => {
                return <TimetableTitleCard data={data} key={index} />;
              })}
            </Carousel>

            <div
              onClick={() => {
                scrollToItem("2023-08-17");
              }}>
              ss
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSchedule;
