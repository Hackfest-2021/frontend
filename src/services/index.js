import axios from 'axios';

const baseURL = 'http://localhost:3000/data';

const axiosInstance = axios.create({
  baseURL,
});

export const fetchAlertData = async (params) => {
  try {
    const url = getUrl(params);
    const { data } = await axiosInstance.get(url);
    return [null, data];
  } catch (error) {
    return [error];
  }
};

const getUrl = ({ type, driver }) => {
  let url = '';
  if (type) {
    url = `?alert__alert_type__id=${type}`;
  }
  if (driver) {
    url = url
      ? `${url}&trip__driver__username=${driver}`
      : `?trip__driver__username=${driver}`;
  }
  return url;
};
