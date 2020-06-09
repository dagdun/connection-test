const mongoose = require("mongoose");
const uri = ["mongodb", "mongo"].includes(process.argv[2])
  ? "mongodb://localhost"
  : process.argv[2];

console.log(uri, "connecting...");
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      throw err;
    }

    console.log(uri, "connected");
    mongoose.disconnect()
  }
);
