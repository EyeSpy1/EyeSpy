// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';  // Flask backend URL

export const startDetection = async () => {
  try {
    const response = await axios.post(`${API_URL}/start_detection`);
    return response.data;
  } catch (error) {
    console.error('Error starting detection:', error);
  }
};

export const stopDetection = async () => {
  try {
    const response = await axios.post(`${API_URL}/stop_detection`);
    return response.data;
  } catch (error) {
    console.error('Error stopping detection:', error);
  }
};

export const checkAlert = async () => {
  try {
    const response = await axios.get(`${API_URL}/check_alert`);
    return response.data;
  } catch (error) {
    console.error('Error checking alert:', error);
  }
};
