import { Kafka, RecordMetadata } from "kafkajs";
import { User } from "../types/User";
import { v4 as uuid } from "uuid";

(async () => {
  const kafka = new Kafka({
    clientId: "client-test-id",
    brokers: ["localhost:9092"],
  });

  const producer = kafka.producer();

  const user: User = {
    id: uuid(),
    userName: "username",
    email: "email@email.com",
  };

  setInterval(async () => {
    await producer.connect();

    const res: RecordMetadata[] = await producer.send({
      topic: "test-topic",
      messages: [{ value: JSON.stringify(user) }],
    });

    await producer.disconnect();
    console.log("message sent succesfully");
  }, 1000);
})();
