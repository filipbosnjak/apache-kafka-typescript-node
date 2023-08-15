import { Kafka } from "kafkajs";
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

  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ value: JSON.stringify(user) }],
  });

  await producer.disconnect();
})();
