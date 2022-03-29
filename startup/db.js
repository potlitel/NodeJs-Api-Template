const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => winston.info("Connected to db"))
  .catch((error) => console.error(error));
}