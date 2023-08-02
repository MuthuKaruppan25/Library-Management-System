const mongoose = require("mongoose");

const newschema = new mongoose.Schema({
  name: {
    type: String,
  },
  regno: {
    type: String,
  },
  password: {
    type: String,
  },
  issued: [
    {
      bookname: {
        type: String,
      },

      flag: {
        type: Number,
      },
    },
  ],
});

const collection1 = mongoose.model("users", newschema);
module.exports = collection1;
