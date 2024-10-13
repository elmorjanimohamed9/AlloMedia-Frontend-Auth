import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoLight from "../../assets/img/logo-light.svg";
import logoDark from "../../assets/img/logo-dark.svg";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 py-3 px-7 ${isScrolled ? 'backdrop-blur-md' : 'bg-slate-50 dark:bg-slate-900'} border-b border-slate-200 dark:border-slate-700 transition-all duration-300`}>
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-24 mr-2" src={isDarkMode ? logoDark : logoLight} alt="logo" />
          </div>
          <ul className="hidden text-slate-900 font-medium dark:text-slate-50 lg:flex ml-14 space-x-12">
            <li>
              <a href="" className="hover:text-orange-500 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="" className="hover:text-orange-500 transition-colors duration-300">Services</a>
            </li>
            <li>
              <a href="" className="hover:text-orange-500 transition-colors duration-300">About Us</a>
            </li>
            <li>
              <a href="" className="hover:text-orange-500 transition-colors duration-300">Contact Us</a>
            </li>
            <li>
              <a href="" className="hover:text-orange-500 transition-colors duration-300">FAQ</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/auth/login" className="text-slate-900 hover:text-slate-50 dark:text-slate-50 font-medium py-2 px-3 border rounded-md border-slate-400 dark:border-slate-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-colors duration-300">
              Sign In
            </a>
            <a
              href="/auth/register"
              className="text-white font-medium bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-colors duration-300 py-2 px-3 rounded-md dark:border-slate-700"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 text-white bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors duration-300">Contact Us</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-500 transition-colors duration-300">FAQ</a>
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="/auth/login" className="py-2 px-3 border rounded-md text-white hover:bg-orange-500 transition-colors duration-300">
                Sign In
              </a>
              <a
                href="/auth/role-selection"
                className="py-2 px-3 text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 transition-colors duration-300"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;