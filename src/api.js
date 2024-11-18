import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getUser = async (accountNumber, pin) => {
  const response = await api.get(`/users?accountNumber=${accountNumber}&pin=${pin}`);
  return response.data[0];
};

export const updateUserBalance = async (id, balance) => {
  await api.patch(`/users/${id}`, { balance });
};
