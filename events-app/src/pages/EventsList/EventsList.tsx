import { useEffect, useState } from "react";
import { getAllEvents } from "../../services/events/getAllEvents";

const EventsList = () => {

  const [ events, setEvents ] = useState<[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response.data);
    } catch(error) {
      console.log(error)
    }
  }

  return <div>
    {
      events.map((item: any) => <div key={item.id}>{JSON.stringify(item)}</div>)
    }
  </div>
};

export default EventsList;