const amqplib = require("amqplib");
const { MESSAGE_BROKER_URL, EXCHANGE_NAME } = require("../config");

module.exports.CreateChannel = async () => {
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", false);
    return channel;
  } catch (error) {
    throw error;
  }
};

module.exports.SubscribeMessage = async (channel, service, binding_key) => {
  const appQueue = await channel.assertQueue(QUEUE_NAME);

  channel.bindQueue(appQueue.queue, EXCHANGE_NAME, binding_key);

  channel.consume(appQueue.queue, (data) => {
    console.log("received data");
    console.log(data.content.toString());
    channel.ack(data);
  });
};

module.exports.PublishMessage = async (channel, binding_key, message) => {
  try {
    console.log("ESTOY ENVIANDO DATA", message);
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
