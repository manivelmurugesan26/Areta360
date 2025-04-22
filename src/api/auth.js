import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../utils/constants';
import { setAuthToken, removeAuthToken } from '../utils/helpers';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = async (credentials) => {
  try {
    const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post(API_ENDPOINTS.SIGNUP, userData);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logout = () => {
  removeAuthToken();
};

export const getProfile = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.PROFILE);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}; 