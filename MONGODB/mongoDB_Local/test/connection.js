const mongoose = require("mongoose");
//connect to mongoDB
mongoose.connect("mongodb://localhost/ecky");

mongoose.connection
  .once("open", function() {
    console.log("connect to database succsessfully!!");
  })
  .on("error", function(error) {
    console.log("connection error", error);
  });
