import axios from 'axios';

export const createEvent = async (data: any) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/events`,
    data
  );
  return response;
};
