import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-80 h-[550px] bg-[#f9f5ff] border border-gray-200 shadow-sm rounded-md flex flex-col justify-end p-6">
        
        <div>
          <h2 className="text-xl font-bold text-gray-900">Welcome to PopX</h2>
          <p className="text-sm text-gray-600 mt-1 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <button
            onClick={() => navigate("/register")}
            className="w-full bg-purple-600 text-white py-2 rounded mb-3"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-200 text-gray-800 py-2 rounded"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;