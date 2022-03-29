//require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const helmet = require("helmet");
const loggerWinston = require("./config/winston");

const app = express();

require("dotenv").config();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/swagger-ui-express")(app);
require("./startup/db")();
app.use(morgan('combined', { stream: loggerWinston.stream }));
app.use(helmet());

module.exports = app;