import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src="" alt="Logo" />
            <span className="text-xl text-white tracking-tight">AlloMedia</span>
          </div>
          <ul className="hidden text-white lg:flex ml-14 space-x-12">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/auth/login" className="text-white py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="/auth/register"
              className="text-white bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
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
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="/auth/login" className="py-2 px-3 border rounded-md text-white">
                Sign In
              </a>
              <a
                href="/auth/register"
                className="py-2 px-3 text-white rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
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
