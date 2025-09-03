import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setUser({
      name: formData.name,
      email: formData.email,
    });

    navigate("/profile");
  };

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.company;

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="max-w-sm w-full  bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5 bg-white">
          <div>
            <label className="block text-sm font-medium text-[rgb(136,80,254)]">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[rgb(136,80,254)]">
              Phone number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[rgb(136,80,254)]">
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[rgb(136,80,254)]">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[rgb(136,80,254)]">
              Company name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-black">
              Are you an Agency? <span className="text-red-600">*</span>
            </p>
            <div className="flex space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded text-white font-medium transition ${
              isFormValid
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-purple-300 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;