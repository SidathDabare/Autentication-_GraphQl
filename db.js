/** @format */

const mongoose = require("mongoose")
require("dotenv").config()

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected successfully")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect_db
