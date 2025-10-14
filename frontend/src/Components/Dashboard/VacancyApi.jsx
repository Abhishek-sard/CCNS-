import axios from "axios";
import { BASE_URL } from "../../services/constants";

// Base URL of your backend API for vacancies
const VACANCY_API = `${BASE_URL}/vacancies`;

// Get all vacancies
export const getVacancies = async () => {
  try {
    const response = await axios.get(VACANCY_API);
    return response; // return full response object to match AdminDashboard expectation
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    throw error;
  }
};

export const getVacancyById = async (id) => {
  try {
    const response = await axios.get(`${VACANCY_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching vacancy:", error);
    throw error;
  }
};

// Create a new vacancy
export const createVacancy = async (vacancyDataOrFormData) => {
  try {
    const isFormData = typeof FormData !== 'undefined' && vacancyDataOrFormData instanceof FormData;
    const response = await axios.post(VACANCY_API, vacancyDataOrFormData, {
      headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || 'Failed to create vacancy';
    console.error("Error creating vacancy:", message);
    throw new Error(message);
  }
};

// Update an existing vacancy by ID
export const updateVacancy = async (id, vacancyData) => {
  try {
    const response = await axios.put(`${VACANCY_API}/${id}`, vacancyData);
    return response.data;
  } catch (error) {
    console.error("Error updating vacancy:", error);
    throw error;
  }
};

// Delete a vacancy by ID
export const deleteVacancy = async (id) => {
  try {
    const response = await axios.delete(`${VACANCY_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    throw error;
  }
};
