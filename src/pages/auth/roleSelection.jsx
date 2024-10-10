import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { User, Truck } from "lucide-react";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate(); 

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected role:", selectedRole);
    // Store the selected role in local storage or state management
    localStorage.setItem('selectedRole', selectedRole);
    // Redirect to the registration page
    navigate('/auth/register');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-10 dark:bg-[#060818] sm:px-16">
      <div className="relative w-full max-w-[750px] rounded-md bg-[linear-gradient(45deg,#f97316_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#f97316_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
        <div className="relative flex flex-col justify-center rounded-md bg-slate-950/50 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[600px] py-10">
          <div className="mx-auto w-full max-w-[500px]">
            <h1 className="text-3xl font-extrabold uppercase text-primary mb-10 text-center">
              Join as a client or deliverer
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4 justify-center">
                <label
                  className={`relative flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
                    selectedRole === "client" ? "border-orange-500 border-2" : "border-gray-300"
                  } bg-slate-950 text-white h-40`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="client"
                    checked={selectedRole === "client"}
                    onChange={handleRoleChange}
                    className="hidden"
                  />
                  <div className="absolute top-2 right-2">
                    <span
                      className={`w-4 h-4 inline-block rounded-full border-2 ${
                        selectedRole === "client" ? "bg-orange-500 border-orange-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  <User size={48} className="mb-2" />
                  <span className="font-medium text-center">I'm a client, hiring for a project</span>
                </label>
                <label
                  className={`relative flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
                    selectedRole === "deliverer" ? "border-orange-500 border-2" : "border-gray-300"
                  } bg-slate-950 text-white h-40`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="deliverer"
                    checked={selectedRole === "deliverer"}
                    onChange={handleRoleChange}
                    className="hidden"
                  />
                  <div className="absolute top-2 right-2">
                    <span
                      className={`w-4 h-4 inline-block rounded-full border-2 ${
                        selectedRole === "deliverer" ? "bg-orange-500 border-orange-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  <Truck size={48} className="mb-2" />
                  <span className="font-medium text-center">I'm a deliverer, looking for work</span>
                </label>
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 ${
                  selectedRole ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedRole}
              >
                Create Account
              </button>
            </form>
            <p className="mt-4 text-white text-center">
              Already have an account?&nbsp;
              <a href="/auth/login" className="text-orange-500 underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;