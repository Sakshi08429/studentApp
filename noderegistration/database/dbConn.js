const mongoose = require("mongoose");
const dbconn = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentapp");
    console.log("db connected")
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = dbconn