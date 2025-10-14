import Vacancy from "../models/Vacancy.js";

// Get all vacancies
export const getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find();
    res.json(vacancies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single vacancy by id
export const getVacancyById = async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy) return res.status(404).json({ message: "Vacancy not found" });
    res.json(vacancy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create new vacancy
export const createVacancy = async (req, res) => {
  const { title, department, location, description, requirements } = req.body;

  try {
    const vacancy = new Vacancy({
      title,
      department,
      location,
      description,
      requirements,
      image: req.file ? req.file.filename : undefined,
    });
    const savedVacancy = await vacancy.save();
    res.status(201).json(savedVacancy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update vacancy
export const updateVacancy = async (req, res) => {
  try {
    const updatedVacancy = await Vacancy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedVacancy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete vacancy
export const deleteVacancy = async (req, res) => {
  try {
    await Vacancy.findByIdAndDelete(req.params.id);
    res.json({ message: "Vacancy deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
