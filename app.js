require("dotenv").config();
require("./database/index");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

module.exports = app;
