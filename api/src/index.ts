import express from 'express';
import * as http from 'http';
import cors from 'cors';
import helmet from 'helmet';

import "reflect-metadata";
import sqlite3  from 'sqlite3';
import { AppDataSource } from "./data-source";
import { Event } from './entity/events.model';
import { EventsRoutes } from './events/events.routes';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());

const db = new sqlite3.Database('test.db');

// db.serialize(() => {

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();
//asldkjf
// AppDataSource.manager.find(Event).then(data =>console.log(data))

AppDataSource.initialize()
    .then(() => {
        console.log('database initialized!!!!!!')
      //   const event = new Event();
      //   event.firstName = 'kamil';
      //   event.lastName= 'raba';
      //   event.email='alsdfjd';
      //   event.date='asldf';
      
      //  AppDataSource.manager.save(event).then(data => console.log(event.id)).catch(err => console.log(err))
    })
    .catch((error) => console.log(error))

// app.get('/', async (req, res) => {
//   res.status(200).send('ok')
//   try {
//     const events = AppDataSource.manager.find(Event);
//     console.log(events.then(data => console.log(data)))


//   } catch(error){
//     console.log(error)
//   }
//   res.send('Hello World!');

// });

new EventsRoutes(app);

server.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});