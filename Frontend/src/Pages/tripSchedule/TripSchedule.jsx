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
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [mode, setMode] = useState(null);
  const [data, setData] = useState([]);
  const [fromSortData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      if (!data.length == 0) {
        let filteredData = [...data];

        if (from != null) {
          filteredData = filteredData
            .map((item) => {
              const moonTrips = item.tripsData.filter(
                (trip) => trip.from.name === from
              );
              if (moonTrips.length > 0) {
                return {
                  ...item,
                  tripsData: moonTrips,
                };
              }
            })
            .filter(Boolean);
        }

        if (to != null) {
          filteredData = filteredData
            .map((item) => {
              const moonTrips = item.tripsData.filter(
                (trip) => trip.to.name === to
              );
              if (moonTrips.length > 0) {
                return {
                  ...item,
                  tripsData: moonTrips,
                };
              }
            })
            .filter(Boolean);
        }

        if (mode != null) {
          filteredData = filteredData
            .map((item) => {
              const moonTrips = item.tripsData.filter(
                (trip) => trip.mode === mode
              );
              if (moonTrips.length > 0) {
                return {
                  ...item,
                  tripsData: moonTrips,
                };
              }
            })
            .filter(Boolean);
        }

        setTimetableData(filteredData);
      }
    };

    filterData();
  }, [from, to, data, mode]);
  useEffect(() => {
    const getTimetableDetails = async () => {
      await axios
        .get("http://localhost:4000/api/trip/getAllTrips")
        .then((res) => {
          console.log("tt", res.data);
          setTimetableData(res.data);
          setData(res.data);
          if (res.data.length != 0) {
            let currentDate = formatDate(new Date());
            for (const item of res.data) {
              if (item._id >= currentDate) {
                console.log("dd", currentDate);
                scrollToItem(item._id);

                break;
              }
              // console.log(item._id);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTimetableDetails();

    // console.log(formatDate(new Date()));
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const refMap = {};
    timetableData.forEach((data, index) => {
      refMap[data._id] = index;
    });
    if (carouselRef.current) {
      carouselRef.current.refMap = refMap;
    }
  }, [timetableData]);

  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 340,
      itemsToShow: 2,
    },
    {
      width: 540,
      itemsToShow: 3,
    },
    {
      width: 660,
      itemsToShow: 4,
    },
    {
      width: 780,
      itemsToShow: 5,
    },
  ];

  const onChange = (date) => {
    // console.log(formatDate(date));
    setDate(date);
    if (timetableData.length != 0) {
      let currentDate = formatDate(date);
      for (const item of timetableData) {
        if (item._id == currentDate) {
          console.log("dd", item._id);
          scrollToItem(item._id);
          break;
        } else if (item._id > currentDate) {
          alert(
            "There are no trips scheduled for that day. Here are the nearest trips based on your search date"
          );
          console.log("no document", item._id);
          scrollToItem(item._id);
          break;
        }
        // console.log(item._id);
      }
    }
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

  const clearHandler = () => {
    setMode(null);
    setFrom(null);
    setTo(null);
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

            <div className="optBtn">
              <div>
                <label className="optBtn-label">From :</label>
                <select
                  className="filter-dropDown"
                  onChange={(e) => setFrom(e.target.value)}
                  value={from !== null ? from : ""}>
                  <option value="" disabled style={{ display: "none" }}>
                    Select a planet
                  </option>
                  <option className="filter-dropDown-option" value="Mercury">
                    Mercury
                  </option>
                  <option className="filter-dropDown-option" value="Venus">
                    Venus
                  </option>
                  <option className="filter-dropDown-option" value="Earth">
                    Earth
                  </option>
                  <option className="filter-dropDown-option" value="Mars">
                    Mars
                  </option>
                  <option className="filter-dropDown-option" value="Jupiter">
                    Jupiter
                  </option>
                  <option className="filter-dropDown-option" value="Saturn">
                    Saturn
                  </option>
                  <option className="filter-dropDown-option" value="Uranus">
                    Uranus
                  </option>
                </select>
              </div>
            </div>

            <div className="optBtn">
              <div>
                <label className="optBtn-label">To :</label>
                <select
                  onChange={(e) => setTo(e.target.value)}
                  className="filter-dropDown"
                  value={to !== null ? to : ""}>
                  <option value="" disabled style={{ display: "none" }}>
                    Select a planet
                  </option>
                  <option className="filter-dropDown-option" value="Mercury">
                    Mercury
                  </option>
                  <option className="filter-dropDown-option" value="Venus">
                    Venus
                  </option>
                  <option className="filter-dropDown-option" value="Earth">
                    Earth
                  </option>
                  <option className="filter-dropDown-option" value="Mars">
                    Mars
                  </option>
                  <option className="filter-dropDown-option" value="Jupiter">
                    Jupiter
                  </option>
                  <option className="filter-dropDown-option" value="Saturn">
                    Saturn
                  </option>
                  <option className="filter-dropDown-option" value="Uranus">
                    Uranus
                  </option>
                </select>
              </div>
            </div>

            <div className="optBtn">
              <div>
                <label className="optBtn-label">Mode :</label>
                <select
                  onChange={(e) => setMode(e.target.value)}
                  className="filter-dropDown"
                  value={mode !== null ? mode : ""}>
                  <option value="" disabled style={{ display: "none" }}>
                    Select a Mode
                  </option>
                  <option
                    className="filter-dropDown-option"
                    value="galactic-4.0">
                    galactic-4.0
                  </option>
                  <option className="filter-dropDown-option" value="StarShip-4">
                    StarShip-4
                  </option>
                  <option className="filter-dropDown-option" value="Falcon 15">
                    Falcon 15
                  </option>
                </select>
              </div>
            </div>

            {from !== null || to !== null || mode !== null ? (
              <div className="optBtn">
                <div className="clearButton" onClick={clearHandler}>
                  Clear
                </div>
              </div>
            ) : null}
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
                return (
                  <TimetableTitleCard data={data} key={index} from={from} />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSchedule;
