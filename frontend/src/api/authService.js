// src/api/authService.js
import axios from './axiosConfig';

export const login = async (credentials) => {
  try {
    const response = await axios.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
