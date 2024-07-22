// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Replace with your actual API URL

export const listEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const getEmployeeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for employee ${id}:`, error);
    throw error;
  }
};

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/employees/`, employee);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};
