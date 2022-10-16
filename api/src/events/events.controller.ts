import express from 'express';
import eventsService from './events.service';

class UsersController {
  async getEvents(req: express.Request, res: express.Response) {
      const events = await eventsService.getAllEvents();
      res.status(200).send(events);
  }

  async addEvent(req: express.Request, res: express.Response) {
      console.log(req.body)
      const newEvent = await eventsService.addEvent(req.body);
      res.status(201).send(newEvent);
  }
}

export default new UsersController();