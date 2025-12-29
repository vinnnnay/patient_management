import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";


import Dashboard from "./components/Dashboard";
import "./App.css";
import { Context } from "./main";

const App = () => {
const { setIsAuthenticated, setUser, setLoading } = useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/doctor/me",
        { withCredentials: true }
      );
      setIsAuthenticated(true);
      setUser(response.data.doctor);
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, []);


  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        
        
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
    
  );
};

export default App;