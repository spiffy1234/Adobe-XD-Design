import { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import { FaCamera } from "react-icons/fa";
import image from "../assets/Ellipse 114.png";
import camicon from "../assets/Group 1585.png";
function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-80 h-[500px] bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden flex flex-col">
        <div className="px-4 py-3 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-semibold text-gray-500">
            Account Settings
          </h2>
        </div>

        <div className="flex-1 bg-gray-100 flex flex-col">
          <div className="px-5 py-5 flex items-start space-x-5 relative">
            <div className="relative">
              <img
                src={image}
                alt="profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full border-2 border-white">
                {/* <FaCamera className="text-white text-xs" /> */}
                <img src={camicon} className="w-3 h-3" />
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                {user?.name || "Marry Doe"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.email || "Marry@Gmail.Com"}
              </p>
            </div>
          </div>

          <div className="px-4 pb-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
          <div className="border-t border-dashed border-gray-300 my-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;