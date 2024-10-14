import React from "react";
import HomeIllustration from "../assets/img/home-ilustration.svg";
import AboutIllustration from "../assets/img/about-ilustration.svg";
import SecurityIllustration from "../assets/img/security-ilustration.svg";
import ServiceCards from "../components/ServiceCards";
import DeliveryTracking from "../components/DeliveryTracking";
import Contact from "../components/Contact";

const Home = ({
  titleHero = "Order Products Faster Easier",
  descriptionHero = "Order your favorite foods at any time and we will deliver them right to where you are.",
  buttonHero = "Get Started",
  title = "Find Out A Little More About Us",
  description = "We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.",
}) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-10 md:py-20 lg:py-28" id="home">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl">
                {titleHero}
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-justify text-gray-500 dark:text-gray-300 md:mt-5 md:max-w-2xl">
                {descriptionHero}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-1 border border-transparent text-base font-normal rounded-full text-white bg-orange-500 hover:bg-orange-600 md:py-3 md:text-lg md:px-6"
                  >
                    {buttonHero}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                src={HomeIllustration}
                alt="home illustration"
                className="w-full h-[13rem] lg:h-[28rem] lg:max-w-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 md:py-20 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 items-center lg:gap-24">
            <div className="space-y-32">
              <div className="flex flex-col-reverse  lg:flex-row items-center justify-between gap-14">
                <img
                  src={AboutIllustration}
                  alt="about illustration"
                  className="w-full lg:w-1/2 h-[24rem] object-contain"
                />
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  <p className="mt-4 text-base w-full max-w-md text-gray-500 dark:text-gray-300">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Your Safety Is Important
                  </h2>
                  <p className="mt-4 text-base w-full max-w-md text-gray-500 dark:text-gray-300">
                  When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made.
                  </p>
                </div>
                <img
                  src={SecurityIllustration}
                  alt="security illustration"
                  className="w-full lg:w-1/2 h-[24rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceCards />

      {/* Delivery Tracking Section */}
      <DeliveryTracking />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
