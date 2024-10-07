import { Link } from "react-router-dom";
import IconInstagram from "../../components/icons/IconInstagram";
import IconX from "../../components/icons/IconX.jsx";
import IconGoogle from "../../components/icons/IconGoogle";
import IconFacebook from "../../components/icons/IconFacebook";
import { useState } from "react";
import { Eye, EyeOff, User, Phone, MapPin, Lock, Mail, CircleX, CircleCheck } from "lucide-react";
import { Toaster, toast } from "sonner";
import { registerSchema } from "../../validations/registerSchema";
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [id]: value }));
    setTouched((prevState) => ({ ...prevState, [id]: true }));

    // Validate input on change
    registerSchema
      .validateAt(id, { [id]: value })
      .then(() => setErrors((prev) => ({ ...prev, [id]: null })))
      .catch((err) => setErrors((prev) => ({ ...prev, [id]: err.message })));

    // Update password strength
    if (id === "password") {
      updatePasswordStrength(value);
    }
  };

  const updatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[@$!%*?&]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerSchema.validate(userData, { abortEarly: false });
      setLoading(true);
      await register(userData);
      toast.success("Registration successful! Please check your email to verify your account.");
    } catch (error) {
      if (error.name === "ValidationError") {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
          toast.error(err.message);
        });
        setErrors(newErrors);
      } else {
        toast.error("Registration failed, please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Toaster />
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
                  Sign up
                </h1>
                <p className="text-base font-semibold leading-normal text-white-light">
                  Enter your information to create an account
                </p>
              </div>
              <form onSubmit={handelSubmit} className="space-y-5 dark:text-white">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="text-white-light">
                      First Name
                    </label>
                    <div className="relative text-white-dark">
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Enter First Name"
                        value={userData.firstName}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                      />
                      <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <User size={16} />
                      </span>
                      {touched.firstName && (
                        <span className="absolute end-4 top-1/2 -translate-y-1/2">
                          {errors.firstName ? <CircleX size={20} color="red" /> : <CircleCheck size={20} color="green" />}
                        </span>
                      )}
                    </div>
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="text-white-light">
                      Last Name
                    </label>
                    <div className="relative text-white-dark">
                      <input
                        id="lastName"
                        type="text"
                        value={userData.lastName}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="Enter Last Name"
                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                      />
                      <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <User size={16} />
                      </span>
                      {touched.lastName && (
                        <span className="absolute end-4 top-1/2 -translate-y-1/2">
                          {errors.lastName ? <CircleX size={20} color="red" /> : <CircleCheck size={20} color="green" />}
                        </span>
                      )}
                    </div>
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-white-light">
                    Email
                  </label>
                  <div className="relative text-white-dark">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                      value={userData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Mail size={16} />
                    </span>
                    {touched.email && (
                      <span className="absolute end-4 top-1/2 -translate-y-1/2">
                        {errors.email ? <CircleX size={20} color="red" /> : <CircleCheck size={20} color="green" />}
                      </span>
                    )}
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="text-white-light">
                    Password
                  </label>
                  <div className="relative text-white-dark">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={userData.password}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Lock size={16} />
                    </span>
                    <button
                      type="button"
                      className="absolute end-4 top-1/2 -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                      disabled={loading}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className={`h-full rounded ${
                          passwordStrength === 5
                            ? "bg-green-500"
                            : passwordStrength >= 3
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs mt-1">
                      Password strength:{" "}
                      {passwordStrength === 5
                        ? "Strong"
                        : passwordStrength >= 3
                        ? "Medium"
                        : "Weak"}
                    </p>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="text-white-light">
                    Phone Number
                  </label>
                  <div className="relative text-white-dark">
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={userData.phoneNumber}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                      <Phone size={16} />
                    </span>
                    {touched.phoneNumber && (
                      <span className="absolute end-4 top-1/2 -translate-y-1/2">
                        {errors.phoneNumber ? <CircleX size={20} color="red" /> : <CircleCheck size={20} color="green" />}
                      </span>
                    )}
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label htmlFor="address" className="text-white-light">
                    Address
                  </label>
                  <div className="relative text-white-dark">
                    <textarea
                      id="address"
                      placeholder="Enter Address"
                      rows="3"
                      value={userData.address}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary ps-10 placeholder:text-white-dark"
                    ></textarea>
                    <span className="absolute start-4 top-3">
                      <MapPin size={16} />
                    </span>
                    {touched.address && (
                      <span className="absolute end-4 top-3">
                        {errors.address ? <CircleX size={20} color="red" /> : <CircleCheck size={20} color="green" />}
                      </span>
                    )}
                  </div>
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                <button
                  type="submit"
                  className="relative flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Sign up"}
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
                Already have an account?&nbsp;
                <Link
                  to="/auth/login"
                  className="uppercase text-primary underline transition hover:text-orange-600 dark:hover:text-white"
                >
                  SIGN IN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;