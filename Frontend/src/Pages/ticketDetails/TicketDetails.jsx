import React, { useEffect, useState } from "react";
import "./ticketDetails.css";
import { useParams } from "react-router-dom";
const TicketDetails = () => {
    const { id } = useParams();
    const [ticketData, setTicketData] = useState(null);
  useEffect(() => {
    const getTicketData = async () => {
      await axios
        .get(`http://localhost:4000/api/trip/getAllTrips/${id}`)
        .then((res) => {
          console.log("tt", res.data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTicketData();
  }, [ticketData]);
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
              <div className="tripDetailsItemValue">earth</div>
            </div>
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">to :</div>
              <div className="tripDetailsItemValue">earth</div>
            </div>
          </div>

          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Start Date :</div>
              <div className="tripDetailsItemValue">2023-08-20</div>
            </div>
          </div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">End Date :</div>
              <div className="tripDetailsItemValue">2023-08-20</div>
            </div>
          </div>

          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Mode :</div>
              <div className="tripDetailsItemValue">StarShip</div>
            </div>
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey"> Departure :</div>
              <div className="tripDetailsItemValue">14 : 00 PM</div>
            </div>
          </div>
          <hr />
          <div className="tripDetailsSubTopic">Other </div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Passenger Count :</div>
              <div className="tripDetailsItemValue">02</div>
            </div>
          </div>
          <div className="tripDetailsFlexContainer">
            <div className="tripDetailsItem">
              <div className="tripDetailsItemKey">Price :</div>
              <div className="tripDetailsItemValue">120000$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
