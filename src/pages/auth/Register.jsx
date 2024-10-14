import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { registerSchema } from "../../validations/registerSchema";
import { Toaster, toast } from "sonner";
import { User, Mail, Lock, Phone, MapPin } from "lucide-react";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import IconInstagram from "../../components/icons/IconInstagram";
import IconX from "../../components/icons/IconX.jsx";
import IconGoogle from "../../components/icons/IconGoogle";
import IconFacebook from "../../components/icons/IconFacebook";
import SpinnerIcon from "../../components/SpinnerIcon";

const Register = () => {
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    roles: [],
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const selectedRole = localStorage.getItem("selectedRole");
    if (selectedRole) {
      setUserData((prevData) => ({ ...prevData, roles: [selectedRole] }));
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [id]: value }));
    setTouched((prevState) => ({ ...prevState, [id]: true }));

    registerSchema
      .validateAt(id, { [id]: value })
      .then(() => setErrors((prev) => ({ ...prev, [id]: null })))
      .catch((err) => setErrors((prev) => ({ ...prev, [id]: err.message })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerSchema.validate(userData, { abortEarly: false });
      setLoading(true);

      await register(userData);

      toast.success("Registration successful!", {
        description: "Please check your email to verify your account.",
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "Bad Request");
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
      <Toaster richColors />
      <div className="absolute inset-0">
        <img
          src="/assets/images/auth/bg-gradient.png"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative flex min-h-screen items-center justify-center px-6 py-10 bg-slate-50 dark:bg-slate-900 sm:px-16">
        <div className="relative w-full max-w-[750px] rounded-md bg-[linear-gradient(45deg,#f97316_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#f97316_100%)] p-2 dark:bg-[linear-gradient(45deg,#f97316_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#f97316_100%)]">
          <div className="relative flex flex-col justify-center rounded-md bg-white/80 backdrop-blur-lg dark:bg-slate-900/80 px-6 lg:min-h-[500px] py-10">
            <div className="mx-auto w-full max-w-[500px]">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Sign up
                </h1>
                <p className="text-base font-semibold leading-normal text-slate-400">
                  Enter your information to create an account
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 dark:text-white"
              >
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <InputField
                      id="firstName"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      touched={touched.firstName}
                      icon={User}
                    />
                  </div>
                  <div className="flex-1">
                    <InputField
                      id="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      touched={touched.lastName}
                      icon={User}
                    />
                  </div>
                </div>
                <InputField
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                  error={errors.email}
                  touched={touched.email}
                  icon={Mail}
                />
                <div className="relative text-white-dark">
                  <InputField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                    error={errors.password}
                    icon={Lock}
                    showPassword={showPassword}
                    togglePasswordVisibility={togglePasswordVisibility}
                  />
                </div>
                <InputField
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={userData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  touched={touched.phone}
                  icon={Phone}
                />
                <InputField
                  id="address"
                  placeholder="Address"
                  value={userData.address}
                  onChange={handleChange}
                  error={errors.address}
                  touched={touched.address}
                  icon={MapPin}
                />
                <button
                  type="submit"
                  className="relative flex items-center bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 justify-center rounded-md px-5 py-2 font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 shadow-[0_10px_20px_-10px_rgba(249,115,22,1)]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                    <SpinnerIcon className="w-4 h-4 me-3 text-white" />
                    Signing up...
                  </>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </form>
              <div className="relative my-7 text-center md:mb-9">
                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                <span className="relative text-sm bg-orange-500 dark:bg-slate-700 rounded-full px-2 font-bold uppercase text-white">
                  or
                </span>
              </div>
              <div className="mb-10 md:mb-[30px]">
                <ul className="flex justify-center gap-3.5 text-white">
                  <li>
                    <Link
                      to="#"
                      className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    >
                      <IconInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    >
                      <IconFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    >
                      <IconX />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="inline-flex bg-gradient-to-r from-orange-500 to-orange-600 h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    >
                      <IconGoogle />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center text-slate-600 dark:text-white">
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
