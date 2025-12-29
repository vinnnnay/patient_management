import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const { isAuthenticated  , loading } = useContext(Context);

  const [appointments, setAppointments] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState(null);

  // Fetch doctor appointments
  useEffect(() => {
    const fetchDoctorAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/appointment/doctor/all",
          { withCredentials: true }
        );
        setAppointments(data.appointments || []);
      } catch (error) {
        console.error(error);
        setAppointments([]);
      }
    };
    fetchDoctorAppointments();
  }, []);

  if (loading) return null; // or spinner

if (!isAuthenticated) {
  return <Navigate to="/login" />;
}

  // Fetch doctor details
  // useEffect(() => {
  //   const fetchDoctorDetails = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:5000/api/v1/user/doctor/me",
  //         { withCredentials: true }
  //       );
  //       setDoctorDetails(data.doctor);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchDoctorDetails();
  // }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }




  return (
    <section className="min-h-screen bg-white p-6">
      {/* TOP BANNER */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between gap-6">
        <div className="flex items-center gap-6">
          <img
            src="/doc.png"
            alt="Doctor"
            className="w-20 h-20 rounded-full border-2 border-[#1E88E5]"
          />
          <div>
            <p className="text-gray-500">Hello,</p>
            <h5 className="text-xl font-semibold text-gray-800">
              Doctor
            </h5>
            <p className="text-gray-600 mt-1">
              View your upcoming appointments and manage patient visits.
            </p>
          </div>
        </div>


        <div className="flex items-center justify-center bg-[#E3F2FD] rounded-lg px-8 py-4">
          <div className="text-center">
            <p className="text-gray-600">Total Appointments</p>
            <h3 className="text-3xl font-bold text-[#1E88E5]">
              {appointments.length}
            </h3>
          </div>
        </div>
      </div>

      {/* APPOINTMENTS TABLE */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h5 className="text-xl font-semibold text-gray-800 mb-4">
          Appointments
        </h5>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1E88E5] text-white">
                <th className="py-3 px-4 text-left">Patient</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Doctor</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-center">Visited</th>
              </tr>
            </thead>

            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr
                    key={appointment._id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4">
                      {appointment.firstName} {appointment.lastName}
                    </td>
                    <td className="py-3 px-4">
                      {appointment.appointment_date?.substring(0, 16)}
                    </td>
                    <td className="py-3 px-4">
                      {appointment.doctor?.firstName}{" "}
                      {appointment.doctor?.lastName}
                    </td>
                    <td className="py-3 px-4">
                      {appointment.department}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#1E88E5]">
                      {appointment.status}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {appointment.hasVisited ? (
                        <GoCheckCircleFill className="text-green-500 text-xl inline" />
                      ) : (
                        <AiFillCloseCircle className="text-red-500 text-xl inline" />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500"
                  >
                    No Appointments Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
