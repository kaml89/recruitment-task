import express from 'express';
import EventsService from './events.service';

class UsersController {
  async getEvents(req: express.Request, res: express.Response) {
      const events = await EventsService.getAllEvents();
      res.status(200).send(events);
  }

  async addEvent(req: express.Request, res: express.Response) {
      const newEvent = await EventsService.addEvent(req.body);
      res.status(201).send(newEvent);
  }
}

export default new UsersController();