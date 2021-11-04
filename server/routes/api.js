const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const User = require("../models/user");
const Event = require("../models/event");

/*************************************** */
// Todos to be removed
/*************************************** */
router.get("/todos", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Todo.find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/todos", (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/todos/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

/*************************************** */
// Users
/*************************************** */

router.get("/users", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  User.find({}, { name: 1, rank: 1, empid: 1, location: 1, email: 1 })
    .then((data) => res.json(data))
    .catch(next);
});

/*************************************** */
// Events
/*************************************** */

router.get("/events", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Event.find({})
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
