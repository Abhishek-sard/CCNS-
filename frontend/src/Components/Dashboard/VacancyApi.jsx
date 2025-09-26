import axios from "axios";

// Base URL of your backend API
const BASE_URL = "http://localhost:5000/api/vacancies";

// Get all vacancies
export const getVacancies = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    throw error;
  }
};

// Create a new vacancy
export const createVacancy = async (vacancyData) => {
  try {
    const response = await axios.post(BASE_URL, vacancyData);
    return response;
  } catch (error) {
    console.error("Error creating vacancy:", error);
    throw error;
  }
};

// Update an existing vacancy by ID
export const updateVacancy = async (id, vacancyData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, vacancyData);
    return response;
  } catch (error) {
    console.error("Error updating vacancy:", error);
    throw error;
  }
};

// Delete a vacancy by ID
export const deleteVacancy = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    throw error;
  }
};
