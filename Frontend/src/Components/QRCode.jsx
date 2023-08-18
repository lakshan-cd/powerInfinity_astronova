import React, { useState } from "react";
import axios from "axios";

const QRCode = () => {
  const [img, setImg] = useState("");

  const sendLink = async () => {
    const res = await axios.post("http://localhost:4000/api/qrcode/scan-qr", {
      url: "https://www.youtube.com/watch?v=THnLOll4wsU&t=217s&ab_channel=EazyPractiz",
    });

    setImg(res.data);
    console.log(res.data);
  };

  return (
    <div>
      <button onClick={sendLink}>Send</button>
      {img && <img src={img} />}
    </div>
  );
};

export default QRCode;
