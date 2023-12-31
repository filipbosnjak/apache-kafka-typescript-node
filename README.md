## Apache Kafka with Typescript and NodeJS

Using:

* Apache Kafka
* KafkaJS - NodeJS client for Apache Kafka
* Typescript - as dev dependency
* Nodemon - for live server restart
* ts-node - TypeScript execution engine

How to use: 

* Start two docker containers with zookeeper and apache kafka with command: 
```console
docker-compose up
```
<br>

* Define a topic:
```console
docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
    --create \
    --bootstrap-server localhost:9092 \
    --replication-factor 1 \
    --partitions 1 \
    --topic test
```

* Start a producer that will publish an event to the test topic :

```console
npm run start:producer
```

* To read published events from the topic start a consumer in a separate terminal with :

```console
npm run start:consumer
```