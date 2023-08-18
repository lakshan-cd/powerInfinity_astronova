const QRCode = require("qrcode");

const scanQR = async (req, res) => {
  const url = req.body.url;
  //   if (url.length === 0) {
  //     res.send("Empty data");
  //   }

  QRCode.toDataURL(url, (err, url) => {
    console.log("hiiii");
    res.json(url);
  });
};

module.exports = { scanQR };
