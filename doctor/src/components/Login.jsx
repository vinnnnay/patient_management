import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/api/v1/user/doctor/login",
          { email, password, confirmPassword, role: "Doctor" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <section className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="logo" className="h-14" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-[#1E88E5] mb-2">
          Welcome to Medicare
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Only Doctors Are Allowed To Login
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#1E88E5] text-white py-2 rounded-lg
                       font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
