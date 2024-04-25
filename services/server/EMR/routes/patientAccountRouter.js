const express = require("express");
const router = express.Router();

const {
    createPatientValidator,
    getPatientValidator,
    updatePatientValidator,
    deletePatientValidator
} = require('../utils/validators/patientAccountValidator');

const {
    createPatient,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient
} = require("../controllers/patientAccountController");

// Route to get all patients and create a new patient
router.route("/")
    .get(getPatients)
    .post(createPatientValidator, createPatient);

// Route to get, update, and delete a specific patient by ID
router.route("/:id")
    .get(getPatientValidator, getPatient)
    .put(updatePatientValidator, updatePatient)
    .delete(deletePatientValidator, deletePatient);

module.exports = router;