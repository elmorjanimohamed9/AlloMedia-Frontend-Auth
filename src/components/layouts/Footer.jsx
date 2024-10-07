import React from 'react';
import payment from '../../assets/img/payment.png'
import IconAppStore from '../icons/IconAppStore';
import IconPlayStore from '../icons/IconPlayStore'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const deliveryServices = {
    restaurants: ['Fast Food', 'Traditional Restaurants', 'Pizza & Italian', 'Sushi & Asian', 'African Cuisine', 'Vegetarian & Vegan'],
    groceries: ['Supermarkets', 'Grocery Stores', 'Bakeries', 'Butcher Shops', 'Fruits & Vegetables', 'Organic & Local'],
    expressServices: ['Express Parcels', 'Documents', 'Pharmacy', 'Flowers', 'Dry Cleaning'],
    beverages: ['Water & Soft Drinks', 'Fresh Juices', 'Coffee & Tea', 'Energy Drinks']
  };

  return (
    <footer className="bg-cover bg-center bg-no-repeat border-t border-neutral-700pt-8 lg:pt-8" >
      <div className="border-b border-gray-700 pb-8 mb-8 px-10">
        <div className="container mx-auto">
          <h2 className="text-white text-2xl font-bold mb-6 p-8 text-center">Our Delivery Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-white text-base font-semibold mb-3">Restaurants:</h3>
              <div className="flex flex-wrap gap-2">
                {deliveryServices.restaurants.map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold mb-3">Groceries:</h3>
              <div className="flex flex-wrap gap-2">
                {deliveryServices.groceries.map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold mb-3">Express Services:</h3>
              <div className="flex flex-wrap gap-2">
                {deliveryServices.expressServices.map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold mb-3">Beverages:</h3>
              <div className="flex flex-wrap gap-2">
                {deliveryServices.beverages.map((item, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-700 pb-8 mb-8 p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* For Customers */}
            <div>
              <h2 className="text-white text-sm uppercase mb-4 pb-2 relative underline underline-offset-8 decoration-2 decoration-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:w-15 after:h-px">
                For Customers
              </h2>
              <ul className="space-y-2">
                {['Sign Up', 'Order Tracking', 'Loyalty Program', 'Special Offers', 'User Guide'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Partners */}
            <div>
              <h2 className="text-white text-sm uppercase mb-4 pb-2 relative underline underline-offset-8 decoration-2 decoration-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:w-15 after:h-px">
                For Partners
              </h2>
              <ul className="space-y-2">
                {['Become a Restaurant Partner', 'Become a Driver', 'Partner Help Center', 'Pricing'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h2 className="text-white text-sm uppercase mb-4 pb-2 relative underline underline-offset-8 decoration-2 decoration-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:w-15 after:h-px">
                About
              </h2>
              <ul className="space-y-2">
                {['About Us', 'Legal Notice', 'Terms & Conditions', 'Blog', 'Careers'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-white text-sm uppercase mb-4 pb-2 relative underline underline-offset-8 decoration-2 decoration-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:w-15 after:h-px">
                Contact
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <MapPin className="text-gray-400" size={28} />
                  <address className="text-gray-400 text-sm  hover:text-orange-500 not-italic">
                    123 Republic Avenue, New York, NY 10001, USA
                  </address>
                </li>
                <li className="flex gap-3">
                  <Phone className="text-gray-400" size={20} />
                  <a href="tel:+12125550123" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    (212) 555-0123
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="text-gray-400" size={20} />
                  <a href="mailto:contact@allomedia.com" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    contact@allomedia.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-white text-sm uppercase mb-4 pb-2 relative underline underline-offset-8 decoration-2 decoration-orange-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:w-15 after:h-px">
                Follow Us
              </h2>
              <div >
                <ul className="flex gap-3">
                    <li><a href="" className='text-gray-400 hover:text-orange-500'><Facebook strokeWidth={2} size={24}/></a></li>
                    <li><a href="" className='text-gray-400 hover:text-orange-500'><Instagram /></a></li>
                    <li><a href="" className='text-gray-400 hover:text-orange-500'><Youtube /></a></li>
                    <li><a href="" className='text-gray-400 hover:text-orange-500'><Twitter /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img src={payment} alt="Payment Methode" />
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <IconAppStore />
            <IconPlayStore />
          </div>
          <p className="text-gray-400 text-xs font-medium tracking-wider">
            Copyright © 2024 <a href="#" className="inline text-inherit">AlloMedia</a> - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;