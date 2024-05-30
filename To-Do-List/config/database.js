let mongoose = require("mongoose");
const { MONGO } = require("./index");

let connectDB = async () => {
  await mongoose.connect(MONGO);
  console.log(`connected to ${MONGO}`);
};

module.exports = connectDB;
