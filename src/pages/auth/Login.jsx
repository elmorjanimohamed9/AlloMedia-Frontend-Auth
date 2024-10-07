import { Link } from "react-router-dom";
import IconInstagram from "../../components/icons/IconInstagram";
import IconX from "../../components/icons/IconX.jsx";
import IconGoogle from "../../components/icons/IconGoogle";
import IconFacebook from "../../components/icons/IconFacebook";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <div className="relative flex flex-col justify-center rounded-md bg-slate-950/50 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[500px] py-10">
            <div className="mx-auto w-full max-w-[500px]">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Sign in
                </h1>
                <p className="text-base font-semibold leading-normal text-white-light">
                  Enter your email and password to login
                </p>
              </div>
              <form className="space-y-5 dark:text-white">
                <div>
                  <label htmlFor="Email" className="text-white-light">
                    Email
                  </label>
                  <div className="relative text-white-dark">
                    <input
                      id="Email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Mail size={16} />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="Password" className="text-white-light">
                    Password
                  </label>
                  <div className="relative text-white-dark">
                    <input
                      id="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Lock size={16} />
                    </span>
                    <button
                      type="button"
                      className="absolute end-4 top-1/2 -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className=" h-4 w-4 cursor-pointer rounded border-2 border-white-light bg-transparent text-primary accent-orange-500 !shadow-none !outline-none !ring-0 !ring-offset-0 checked:bg-[length:90%_90%] disabled:cursor-not-allowed disabled:bg-orange-500 ltr:mr-1.5 rtl:ml-1.5 dark:border-[#253b5c] dark:checked:border-transparent dark:disabled:bg-[#1b2e4b] bg-white dark:bg-black"
                    />
                    <span className="text-white-light pl-2">Remember me</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="relative flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
                >
                  Sign in
                </button>
              </form>
              <div className="relative my-7 text-center md:mb-9">
                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                <span className="relative bg-slate-950 px-2 font-bold uppercase text-white-light dark:bg-dark dark:text-white-light">
                  or
                </span>
              </div>
              <div className="mb-10 md:mb-[30px]">
                <ul className="flex justify-center gap-3.5 text-white">
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #9a3412 100%)",
                      }}
                    >
                      <IconInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #9a3412 100%)",
                      }}
                    >
                      <IconFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #9a3412 100%)",
                      }}
                    >
                      <IconX />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #9a3412 100%)",
                      }}
                    >
                      <IconGoogle />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center text-white-light dark:text-white">
                Don't have an account ?&nbsp;
                <Link
                  to="/auth/register"
                  className="uppercase text-primary underline transition hover:text-orange-600 dark:hover:text-white"
                >
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
