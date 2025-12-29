import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
  getDoctorAppointmentDetails,
  getDoctorAllAppointments
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isDoctorAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);


// doctor dashboard wale routes
router.get("/doctor/all" , isDoctorAuthenticated  , getDoctorAllAppointments);
// router.get("/doctor/:id" , isDoctorAuthenticated , getDoctorAppointmentDetails);




export default router;