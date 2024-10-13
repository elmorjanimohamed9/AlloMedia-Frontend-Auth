import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import paymentMethodsImage from '../../assets/img/payment.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-gray-600 py-12 border-t border-t-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <span className="text-orange-500 text-2xl font-bold mr-2">P</span>
            <span className="text-slate-900 text-xl font-semibold">Pagedone</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-slate-200 text-slate-950 hover:bg-orange-500 hover:text-white p-2 rounded-full"><FaFacebook /></a>
            <a href="#" className="bg-slate-200 text-slate-950 hover:bg-orange-500 hover:text-white p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-slate-200 text-slate-950 hover:bg-orange-500 hover:text-white p-2 rounded-full"><FaTwitter /></a>
            <a href="#" className="bg-slate-200 text-slate-950 hover:bg-orange-500 hover:text-white p-2 rounded-full"><FaYoutube /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 py-10 border-t border-slate-200 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-slate-900 text-lg font-semibold mb-4">Pagedone</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500">Pro Version</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Figma UI System</a></li>
              <li><a href="#" className="hover:text-orange-500">Icons Assets</a></li>
              <li><a href="#" className="hover:text-orange-500">Responsive Blocks</a></li>
              <li><a href="#" className="hover:text-orange-500">Components Library</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-500">Quick Start</a></li>
              <li><a href="#" className="hover:text-orange-500">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-500">User Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="mail@allomedia.com" 
                  className="w-full bg-white border text-sm border-slate-300 rounded-md px-4 py-2 pr-24 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button 
                  type="submit" 
                  className="absolute rounded-e-md bottom-0 top-0 right-0 bg-orange-500 text-white px-4 py-1 hover:bg-orange-600 transition duration-300"
                >
                  Send
                </button>
              </div>
              <div className="flex items-start justify-start space-x-2">
                <input type="checkbox" id="terms" className="rounded accent-orange-500 focus:ring-orange-500" />
                <label htmlFor="terms" className="text-sm align-top">
                  I agree with <a href="#" className="text-orange-500">Privacy Policy</a> and <a href="#" className="text-orange-500">Terms of Condition</a>
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
          <p className="text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} <a href="#" className="font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300">AlloMedia</a> - All rights reserved
          </p>
          <div className="flex items-center space-x-4">
            <img 
              src={paymentMethodsImage} 
              alt="Payment methods" 
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;