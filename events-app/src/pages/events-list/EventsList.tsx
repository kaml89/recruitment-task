import { useEffect, useState } from "react";
import { EventsService } from "../../services/events";
import IEvent from "../../types/Events";

const EventsList = () => {

  const [ events, setEvents ] = useState<IEvent[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await EventsService.getAll();
      setEvents(response.data);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      {
        events.map((item: any) => <div key={item.id}>{JSON.stringify(item)}</div>)
      }
    </div>
  )};

export default EventsList;