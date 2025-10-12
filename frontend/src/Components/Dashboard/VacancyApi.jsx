import axios from "axios";
import { BASE_URL } from "../../services/constants";

<<<<<<< HEAD
// Base URL of your backend API
const myURL = `${BASE_URL}/vacancie`;
=======
// Base URL of your backend API for vacancies
const VACANCY_API = `${BASE_URL}/vacancies`;
>>>>>>> 1d1dc83b5e61d947e4c9968d421187e47c4bac5f

// Get all vacancies
export const getVacancies = async () => {
  try {
<<<<<<< HEAD
    const response = await axios.get(myURL);
    return response;
=======
    const response = await axios.get(VACANCY_API);
    return response; // return full response object to match AdminDashboard expectation
>>>>>>> 1d1dc83b5e61d947e4c9968d421187e47c4bac5f
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    throw error;
  }
};

// Create a new vacancy
export const createVacancy = async (vacancyData) => {
  try {
<<<<<<< HEAD
    const response = await axios.post(myURL, vacancyData);
    return response;
=======
    const response = await axios.post(VACANCY_API, vacancyData);
    return response.data;
>>>>>>> 1d1dc83b5e61d947e4c9968d421187e47c4bac5f
  } catch (error) {
    console.error("Error creating vacancy:", error);
    throw error;
  }
};

// Update an existing vacancy by ID
export const updateVacancy = async (id, vacancyData) => {
  try {
<<<<<<< HEAD
    const response = await axios.put(`${myURL}/${id}`, vacancyData);
    return response;
=======
    const response = await axios.put(`${VACANCY_API}/${id}`, vacancyData);
    return response.data;
>>>>>>> 1d1dc83b5e61d947e4c9968d421187e47c4bac5f
  } catch (error) {
    console.error("Error updating vacancy:", error);
    throw error;
  }
};

// Delete a vacancy by ID
export const deleteVacancy = async (id) => {
  try {
<<<<<<< HEAD
    const response = await axios.delete(`${myURL}/${id}`);
    return response;
=======
    const response = await axios.delete(`${VACANCY_API}/${id}`);
    return response.data;
>>>>>>> 1d1dc83b5e61d947e4c9968d421187e47c4bac5f
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    throw error;
  }
};


