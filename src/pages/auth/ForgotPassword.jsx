import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Mail } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { forgotPassword, loading } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await forgotPassword(email);
      toast.success("Password reset email sent.", {
        description: "Please check your email.",
        duration: 5000,
      });
      setTimeout(() => navigate("/auth/login"), 5000);
    } catch (error) {
      toast.error(error.message || "Failed to send reset email. Please try again.");
    }
  };

  return (
    <div>
      <Toaster richColors />
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
                  Forgot Password
                </h1>
                <p className="text-base font-semibold leading-normal text-white-light">
                  Enter your email to reset your password
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 dark:text-white">
                <div className="relative text-white-dark">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                  />
                  <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <Mail size={16} />
                  </span>
                </div>
                <button
                  type="submit"
                  className="relative flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Reset Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;