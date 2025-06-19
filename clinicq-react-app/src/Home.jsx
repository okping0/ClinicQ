import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-50 gap-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Welcome to ClinicQ</h1>
      <p className="text-lg text-gray-700 mb-6">Your smart patient queue system</p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/patient")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Login as Patient
        </button>

        <button
          onClick={() => navigate("/doctor")}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Login as Doctor
        </button>
      </div>
    </div>
  );
}

export default Home;
