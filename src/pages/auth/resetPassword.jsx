import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add logic to reset password here
    console.log("Password reset successfully");
  };

  return (
    <div>
      <div className="absolute inset-0">
        <img
          src="/assets/images/auth/bg-gradient.png"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6 py-10 dark:bg-[#060818] sm:px-16">
        <div className="relative w-full max-w-[750px] rounded-md bg-[linear-gradient(45deg,#f97316_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#f97316_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
          <div className="relative flex flex-col justify-center rounded-md bg-slate-950/50 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[600px] py-10">
            <div className="mx-auto w-full max-w-[530px]">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Reset Password
                </h1>
                <p className="text-base font-semibold leading-normal text-white-light">
                  Enter your new password below
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 dark:text-white">
                <div>
                  <label htmlFor="NewPassword" className="text-white-light">New Password</label>
                  <div className="relative text-white-dark">
                    <input
                      id="NewPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Lock size={16} />
                    </span>
                    <button
                      type="button"
                      className="absolute end-4 top-1/2 -translate-y-1/2"
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="ConfirmPassword" className="text-white-light">Confirm Password</label>
                  <div className="relative text-white-dark">
                    <input
                      id="ConfirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Lock size={16} />
                    </span>
                    <button
                      type="button"
                      className="absolute end-4 top-1/2 -translate-y-1/2"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="relative flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;