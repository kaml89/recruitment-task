import { AppDataSource } from "../data-source";
import { Event } from '../entity/events.model';
import {IEvent} from './events.interface';


class EventsService {

  async getAllEvents(): Promise<any> {
    // const events = await AppDataSource.manager.find(Event);
    const events = await AppDataSource.manager.find(Event);
    return events;
  }

  async addEvent(eventInput: IEvent): Promise<any> {
    const event = new Event();
    event.firstName = eventInput.firstName;
    event.lastName = eventInput.lastName;
    event.email = eventInput.email;
    event.date = eventInput.date;

    await AppDataSource.manager.save(event);
    return event;
  }
}

export default new EventsService();