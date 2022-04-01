const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");




dotenv.config()

const app = express()

app.set("port", process.env.PORT || 7070);
 






app.listen(app.get("port"), () => {
  console.log("Server started on port " + app.get("port"));
});