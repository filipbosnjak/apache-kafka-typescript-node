import { Kafka } from "kafkajs";
import { User } from "../types/User";

(async () => {
  const kafka = new Kafka({
    clientId: "client-test-id",
    brokers: ["localhost:9092"],
  });

  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        try {
        const user: User = JSON.parse(message.value?.toString() || "");
        } catch(e) {
            console.log(e);
            
        }
        console.log({
          value: message.value?.toString(),
        });
    },
  });
})();
