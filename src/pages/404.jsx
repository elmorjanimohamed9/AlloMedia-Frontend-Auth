import React from 'react';
import { Link } from 'react-router-dom';
import IconX from "../components/icons/IconX.jsx"; 

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-10 dark:bg-[#060818] sm:px-16">
      <div className="absolute inset-0">
        <img
          src="/assets/images/auth/bg-gradient.png"
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative w-full max-w-[750px] rounded-md bg-[linear-gradient(45deg,#f97316_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#f97316_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
        <div className="relative flex flex-col justify-center rounded-md bg-slate-950/50 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[500px] py-10">
          <div className="mx-auto w-full max-w-[500px] text-center">
            <IconX size={64} className="mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-extrabold uppercase !leading-snug text-primary md:text-5xl">
              404
            </h1>
            <p className="text-lg font-semibold leading-normal text-white-light mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-block rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;