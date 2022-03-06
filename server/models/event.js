const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for event
const EventSchema = new Schema({
  eventid: {
    type: String,
    required: [false],
  },
  name: {
    type: String,
    required: [true],
  },
  venue: {
    type: String,
    required: [true],
  },
  summary: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [false],
  },
  registrationenddate: {
    type: Date,
    required: [false],
  },
  eventstartdate: {
    type: Date,
    required: [false],
  },
  eventenddate: {
    type: Date,
    required: [false],
  },
  coins: {
    type: String,
  },
  status: {
    type: String,
    required: [false],
  },
  tags: {
    type: String,
  },
  ispremierevent: {
    type: String,
  },
  cohost: {
    type: String,
  },
  listtoinvite: {
    type: String,
  },
  location: {
    type: String,
  },
  goal: {
    type: String,
  },
  issubevent: {
    type: String,
  },
  parenteventid: {
    type: String,
  },
  eventteams: {
    eventteamname: {
      type: String,
    },
  },
  badge: {
    badgename: {
      type: String,
    },
    template: {
      type: String,
    },
    text: {
      type: String,
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
    badgevalue: {
      type: String,
    },
    category: {
      type: String,
    },
    badgefrequency: {
      type: String,
    },
  },
  leaderboard: {
    rank: {
      type: Number,
    },
    username: {
      type: String,
    },
    column1: {
      type: String,
    },
  },
  rules: {
    rulename: {
      type: String,
    },
    points: {
      type: String,
    },
    criteria: {
      type: String,
    },
    rulefrequency: {
      type: String,
    },
  },
  comments: {
    empid: {
      type: String,
    },
    eventid: {
      type: String,
    },
    message: {
      type: String,
    },
    time: {
      type: Date,
    },
    likelist: {
      type: String,
    },
    replies: {
      type: String,
    },
  },
});

// Create model for event

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
