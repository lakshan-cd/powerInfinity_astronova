import React, { useEffect, useState } from "react";
import "./timetableModel.css";
import { useNavigate } from "react-router-dom";

const TimetableModel = ({ data, setOpenModel }) => {
  const [sDate, setSDate] = useState(null);
  const [eDate, setEDate] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    function formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    }

    setSDate(formatDate(data.startDate));
    setEDate(formatDate(data.endDate));
  }, []);

  const bookNowHandler = () => {
     navigate("/addreservation", { state: data });
  }

  return (
    <div>
      <div className="scheduleDetailOverlay">
        <div className="scheduleDetailModel">
          <div className="ttModelContent">
            <div className="ttModelTitle"> Trip Details</div>

            <div className="detailItem">
              <div className="detailsKey">From : </div>
              <div className="detailsValue">{data.from.name}</div>
              <div className="detailsKey">To : </div>
              <div className="detailsValue">{data.to.name}</div>
            </div>

            <div className="detailItem">
              <div className="detailsKey">Start Date : </div>
              <div className="detailsValue">{sDate}</div>
            </div>

            <div className="detailItem">
              <div className="detailsKey">End Date : </div>
              <div className="detailsValue">{eDate}</div>
            </div>

            <div className="detailItem">
              <div className="detailsKey">Mode : </div>
              <div className="detailsValue">{data.mode}</div>
            </div>

            <div className="detailItem">
              <div className="detailsKey">Initial Price : </div>
              <div className="detailsValue">{`${data.price} $ `}</div>
            </div>

            <div className="buttonSection">
              <div className="ttCloseButton" onClick={() => setOpenModel(false)}>
                Close
              </div>
              <div className="ttBookButton" onClick={bookNowHandler}>Book Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableModel;
