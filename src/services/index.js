import axios from 'axios';

const baseURL = 'http://localhost:3000/data';

const axiosInstance = axios.create({
  baseURL,
});

export const fetchAlertData = async () => {
  try {
    const { data } = await axiosInstance.get();
    return [null, data];
  } catch (error) {
    return [error];
  }
};
