import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToLogin = () => {
    const loginSection = document.getElementById("login-section");
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">ClinicQ</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <button onClick={scrollToLogin} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </nav>
          {/* Hamburger - mobile */}
          <div className="md:hidden">
            <button className="text-2xl">&#9776;</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-200 pt-20">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Smarter Patient Queues for Modern Clinics
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-xl">
          ClinicQ helps streamline patient flow, reduce waiting time, and improve hospital experience for both doctors and patients.
        </p>
        <div className="flex space-x-4">
          <button onClick={scrollToLogin} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Login as Patient
          </button>
          <button onClick={scrollToLogin} className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
            Login as Doctor
          </button>
        </div>
      </section>

      {/* Login Section */}
      <section id="login-section" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10 text-gray-800">Login Options</h3>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <Link to="/patient">
              <div className="bg-blue-50 border p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-blue-700 mb-2">Patient Login</h4>
                <p>Click to login as a patient</p>
              </div>
            </Link>
            <Link to="/doctor">
              <div className="bg-green-50 border p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-green-700 mb-2">Doctor Login</h4>
                <p>Click to login as a doctor</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2025 ClinicQ. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
