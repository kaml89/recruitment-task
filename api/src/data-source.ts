
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event } from "./entity/events.model";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./test.db",
  synchronize: true,
  entities: [Event],
  subscribers: [],
  migrations: [],
})

