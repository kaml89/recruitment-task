// import {Connection, createConnection } from 'typeorm';
import "reflect-metadata";
import sqlite3  from "sqlite3";
import { DataSource } from "typeorm";
import { Event } from "./entity/events.model";

export class TestHelper {

    private static _instance: TestHelper;

    private constructor() {}

    public static get instance(): TestHelper {
        if(!this._instance) this._instance = new TestHelper();

        return this._instance;
    }

    private dbConnect!: any;
    private testdb!: any;


    async setupTestDB() {
      const db = new sqlite3.Database(':memory:');

        this.testdb = db;
        this.dbConnect = new DataSource({
          type: "sqlite",
          database: ":memory:",
          synchronize: true,
          entities: [Event],
          subscribers: [],
          migrations: [],
        })

        await this.dbConnect.initialize();
    }

    teardownTestDB() {
        this.dbConnect.close();
        this.testdb.close();
        
    }

}