import axios from 'axios';

export const postLocationData = async (data) => {
  try {
    const API_BASE_URL = 'http://localhost:8080'; 
    console.log('Making POST request with data:', data);
    const response = await axios.post(`${API_BASE_URL}/products`, data);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('Failed to post location data.');
  }
};
