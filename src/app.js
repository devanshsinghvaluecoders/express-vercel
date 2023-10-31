const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();
const PaymentRoute = require("./routes/paymentRoute");
const middlewares = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "server running",
  });
});

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: "4W0FqN6bWzwmcPlC38sbpVvb" })
);

app.use("/api", PaymentRoute);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
