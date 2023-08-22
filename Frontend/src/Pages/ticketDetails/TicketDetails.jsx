import React, { useEffect, useState } from "react";
import "./ticketDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const TicketDetails = () => {
  const { id } = useParams();
  const [ticketData, setTicketData] = useState(null);
  useEffect(() => {
    const getTicketData = async () => {
      await axios
        .get(`http://localhost:4000/api/booking/bookings/${id}`)
        .then((res) => {
          console.log("tt", res.data);
          setTicketData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTicketData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function formatTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 === 0 ? 12 : hours % 12)
      .toString()
      .padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  }

  return (
    <div className="ticketPage">
      <div className="ticketContainer">
        <div className="ticketCard">
          <div className="ticketDetails">Ticket Details</div>
          <hr />
          <div className="tripDetailsSubTopic">Trip</div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">From :</div>
              <div className="tripDetailsItemValue">
                {ticketData && ticketData.trip_id.from.name}
              </div>
            </div>
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">to :</div>
              <div className="tripDetailsItemValue">
                {" "}
                {ticketData && ticketData.trip_id.to.name}
              </div>
            </div>
          </div>

          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Start Date :</div>
              <div className="tripDetailsItemValue">
                {ticketData && formatDate(ticketData.trip_id.startDate)}
              </div>
            </div>
          </div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">End Date :</div>
              <div className="tripDetailsItemValue">
                {ticketData && formatDate(ticketData.trip_id.endDate)}
              </div>
            </div>
          </div>

          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Mode :</div>
              <div className="tripDetailsItemValue">
                {ticketData && ticketData.trip_id.mode}
              </div>
            </div>
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey"> Departure :</div>
              <div className="tripDetailsItemValue">
                {ticketData && formatTime(ticketData.trip_id.departureTime)}
              </div>
            </div>
          </div>
          <hr />
          <div className="tripDetailsSubTopic">Other </div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Passenger Count :</div>
              <div className="tripDetailsItemValue">
                {ticketData && ticketData.passsenger_ids.length}
              </div>
            </div>
          </div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Price :</div>
              <div className="tripDetailsItemValue">
                {ticketData && `${ticketData.total_payment}$`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
