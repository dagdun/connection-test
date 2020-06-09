const connection = process.argv[2];
if (!connection) {
  console.log(`please spacific connection.
node index.js mongodb://10.198.1.44 or mongodb to connection mongodb://localhost`);

  process.exit();
}

if (connection.indexOf("mongodb") !== -1) {
  require("./conn/mongodb.js");
}

if (connection.indexOf("amqp") !== -1) {
  require("./conn/amqp.js");
}
