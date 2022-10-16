import axios from 'axios';

export const getAllEvents = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/events`
  );
  return response;
};
