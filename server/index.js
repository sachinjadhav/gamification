const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiroutes = require("./routes/api");
// var cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

//ROUTES

app.use("/api", apiroutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

// RewardAPI Calls
//GET
// const rewardGetRoute = require("./RewardAPI/routes/rewardGet.js");
// app.get("/api/reward/:action", cors(), rewardGetRoute.get);

// //POST
// const rewardPostRoute = require("./RewardAPI/routes/rewardPost.js");
// app.post("/api/reward/:action", cors(), rewardGetRoute.post);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
