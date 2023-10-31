const express = require("express");

const paymentController = require("../../controllers/paymentController.js");
const router = express.Router();
router.get("/test", (req, res) =>
  res.status(200).json({ key: "4W0FqN6bWzwmcPlC38sbpVvb" })
);

router.post("/checkout", paymentController.checkout);

router.post("/paymentverification", paymentController.paymentVerification);
module.exports = router;
