import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const shortenUrl = async (originalUrl) => {
  const response = await axios.post(`${API_URL}/shorten`, { originalUrl });
  return response.data;
};

export const getUrlAnalytics = async (shortUrl) => {
  const response = await axios.get(`${API_URL}/analytics/${shortUrl}`);
  return response.data;
};
