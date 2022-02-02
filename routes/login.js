var express = require("express");
var router = express.Router();

const otps = [2201, 4502, 5511, 4532, 1111, 2567];
var otp = 0;
var phoneNumber;

/* GET home page. */
router.post("/", (req, res) => {
  phoneNumber = req.body.phoneNumber;
  otp = otps[Math.floor(Math.random() * 4)];
  res.json({ sucess: true, message: `otpSent ${otp} to ${phoneNumber}` });
});

router.get("/otp", (req, res) => {
  let { number } = req.query;
  console.log(number, phoneNumber);
  if (number == phoneNumber) {
    return res.send({ success: true, value: otp });
  } else {
    return res.send("Change your number");
  }
});

router.post("/otp", (req, res) => {
  let { Otp } = req.body;
  if (Otp == otp) {
    res.send("OTP verified successfully");
  }
});

module.exports = router;
