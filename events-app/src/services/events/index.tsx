import Axios from "axios";
import IEvent from "../../types/Events";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

const getAll = () => {
  return axios.get<Array<IEvent>>("/events");
};

const create = (data: IEvent) => {
  return axios.post<Array<IEvent>>(`/events`, data);
};

export const EventsService = {
  getAll,
  create
};