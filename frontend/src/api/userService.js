// src/api/userService.js
import axios from './axiosConfig';

export const getUserProfile = async () => {
  try {
    const response = await axios.get('/user/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
