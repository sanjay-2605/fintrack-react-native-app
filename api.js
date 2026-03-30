import axios from 'axios';

const API_URL = 'https://example.com/api';

export const fetchExpenses = async () => {
  const response = await axios.get(`${API_URL}/expenses`);
  return response.data;
};

export const addExpenseApi = async (expense) => {
  const response = await axios.post(`${API_URL}/expenses`, expense);
  return response.data;
};
