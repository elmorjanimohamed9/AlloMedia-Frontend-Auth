import React from "react";
import ContactIllustration from "../assets/img/contact-illustration.svg";

const Contact = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-12">
          You can contact us from here, you can write to us, call us or visit
          our service center, we will gladly assist you.
        </p>

        <div className="flex items-center justify-between">
          <div className="lg:w-1/2">
            <img
              src={ContactIllustration}
              alt="Contact illustration"
              className="w-full h-[22rem] object-contain"
            />
          </div>

          <div className="p-6 w-1/2 bg-slate-50 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full text-sm px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full text-sm px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(123) 456-7890"
                    className="w-full text-sm px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows="4"
                  className="w-full text-sm px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
