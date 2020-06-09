const amqp = require("amqplib/callback_api");
const uri = ["amqp", "rabbitmq"].includes(process.argv[2])
  ? "amqp://localhost"
  : process.argv[2];

console.log(uri, "connecting...");
amqp.connect(uri, function (error0, connection) {
  if (error0) {
    throw error0;
  }

  console.log(uri, "connected");
});
