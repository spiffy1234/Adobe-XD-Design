import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({
        name: email.split("@")[0],
        email: email,
      });
      navigate("/profile");
    }
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-80 h-[550px] bg-[#f9f5ff] border border-gray-200 shadow-md rounded-lg p-6">
        
        <h2 className="text-2xl font-bold text-gray-900">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-lg text-gray-500 mt-1 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded font-medium transition ${
              isFormValid
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;