import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const VerifyEmail = () => {
  const [status, setStatus] = useState('Verifying your email...');
  const [isVerified, setIsVerified] = useState(false);
  const verificationAttempted = useRef(false);
  const { token } = useParams();
  const navigate = useNavigate();
  const { verifyEmail } = useAuth();

  useEffect(() => {
    const verify = async () => {
      if (verificationAttempted.current) return;
      verificationAttempted.current = true;

      try {
        const response = await verifyEmail(token);

        if (response.status === 200) {
          setStatus('Email verified successfully!');
          setIsVerified(true);
          toast.success('Email verified successfully!');
        } else {
          setStatus(`Verification failed: ${response.data.message}`);
          toast.error(`Verification failed: ${response.data.message}`);
        }
      } catch (error) {
        setStatus('Verification failed. Please try again.');
        toast.error('Verification failed. Please try again.');
        console.error('Verification error:', error);
      }
    };

    verify();
  }, [token, verifyEmail]);

  const handleRedirectToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div>
      <Toaster richColors />
      <div className="absolute inset-0">
        <img
          src="/assets/images/auth/bg-gradient.png"
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative flex min-h-screen items-center justify-center px-6 py-10 dark:bg-[#060818] sm:px-16">
        <div className="relative w-full max-w-[500px] rounded-md bg-[linear-gradient(45deg,#f97316_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#f97316_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
          <div className="relative flex flex-col justify-center rounded-md bg-slate-950/50 backdrop-blur-lg dark:bg-black/50 px-6 py-10">
            <div className="mx-auto w-full max-w-[400px] text-center">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Email Verification
                </h1>
              </div>
              <div className="mb-8 flex justify-center">
                {isVerified ? (
                  <CheckCircle className="h-16 w-16 text-green-500" />
                ) : (
                  <XCircle className="h-16 w-16 text-red-500" />
                )}
              </div>
              <p className="text-xl font-semibold leading-normal text-white-light mb-8">
                {status}
              </p>
              {isVerified && (
                <button
                  onClick={handleRedirectToLogin}
                  className="relative flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold outline-none transition duration-300 hover:shadow-none text-white !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(249,115,22,1)] gradient-button"
                >
                  Go to Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;