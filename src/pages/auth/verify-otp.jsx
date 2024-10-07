import { useState } from "react";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = ""; 
      setOtp(newOtp);
      event.target.previousSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpValue = otp.join("");
    console.log("OTP submitted:", otpValue);
    // Add logic to verify OTP here
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
                  Verify OTP
                </h1>
                <p className="text-base font-semibold leading-normal text-white-light">
                  Enter the OTP sent to your email
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 dark:text-white">
                <div className="flex justify-center space-x-2">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      name="otp"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onFocus={(e) => e.target.select()}
                      className="w-10 h-10 text-center rounded-md border border-slate-700 bg-slate-950 text-sm font-normal text-white !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary"
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="relative flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
                >
                  Verify
                </button>
              </form>
              <div className="text-center text-white-light dark:text-white mt-6">
                Didn't receive the OTP?&nbsp;
                <Link
                  to="#"
                  className="uppercase text-primary underline transition hover:text-orange-600 dark:hover:text-white"
                >
                  Resend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;