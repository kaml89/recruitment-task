
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Event } from "./entity/events.model";

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'development') {
  AppDataSource = new DataSource({
    type: "sqlite",
    database: "./test.db",
    synchronize: true,
    entities: [Event],
    subscribers: [],
    migrations: [],
  })
} else {
  AppDataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    entities: [Event],
    subscribers: [],
    migrations: [],
  })
}

const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};


export { AppDataSource, getDataSource };