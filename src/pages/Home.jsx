import { React, useState } from "react";
import whiteLogo from "../assets/images/white_logo.svg";
import webMobileImg from "../assets/images/web_mobile.svg";
import digitalStrategy from "../assets/images/digital_strategy.svg";
import heroImage from "../assets/images/hero_background.png";
import { CustomButton } from "../components/CustomButton";
import { CustomAccordion } from "../components/CustomAccordion";

export const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const accordionData = [
    {
      titleText:
        "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      bodyText:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      titleText:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      bodyText:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      titleText:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      bodyText:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  const handleAccordionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <body className="font-poppins w-full scroll-smooth">
      <header className="bg-primaryColor py-5">
        <nav className="flex justify-between w-11/12 mx-auto items-center">
          <div>
            <img src={whiteLogo} alt="" className="h-7" />
          </div>
          <div
            className={`${
              menuOpen
                ? "absolute w-full left-0 top-0 p-6 bg-white min-h-screen"
                : ""
            } transition duration-300 ease-in`}
          >
            <div className="flex justify-between items-start">
              <ul
                className={`${
                  menuOpen
                    ? "text-textColor block font-medium"
                    : "flex gap-x-6 text-white max-sm:hidden"
                } font-inter text-sm`}
              >
                <li className="md:hover:text-accentColorWizard hover:text-primaryColor max-sm:mb-5">
                  <a href="#services" onClick={handleMenuClose}>
                    SERVICES
                  </a>
                </li>
                <li className="md:hover:text-accentColorWizard hover:text-primaryColor max-sm:mb-5">
                  <a href="#about" onClick={handleMenuClose}>
                    ABOUT US
                  </a>
                </li>
                <li className="md:hover:text-accentColorWizard hover:text-primaryColor max-sm:mb-5">
                  <a href="#contact" onClick={handleMenuClose}>
                    CONTACT US
                  </a>
                </li>
                <li className="md:hover:text-accentColorWizard hover:text-primaryColor max-sm:mb-5">
                  <a href="#careers" onClick={handleMenuClose}>
                    CAREERS
                  </a>
                </li>
              </ul>
              <button
                onClick={handleMenuClose}
                className={`${menuOpen ? "" : "hidden"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-textColor hover:scale-110 transition-all duration-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button onClick={handleMenuOpen} className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </header>
      <img
        src={heroImage}
        alt=""
        className="lg:min-h-screen w-full object-cover h-128 max-sm:h-64"
      />
      <div className="p-6 bg-gradient-to-r from-darkColor to-analogousColorTwo lg:w-128 lg:absolute lg:bottom-14 lg:left-20 bottom-0 w-full left-0">
        <h2 className="text-white md:text-4xl text-4xl max-sm:text-3xl font-semibold mb-3">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h2>
        <CustomButton text="GET FREE CONSULTATION" />
      </div>
      <div
        className={`${
          menuOpen
            ? "hidden"
            : "visible bg-white lg:px-5 px-6 lg:py-10 py-12 mb-8"
        }`}
      >
        <div className="flex items-center lg:gap-x-24 gap-x-4 justify-center max-lg:mb-10 max-sm:flex-wrap max-sm:text-center">
          <img src={webMobileImg} alt="" className="lg:h-96 h-72" />
          <div className="lg:w-2/5 w-full">
            <h3 className="font-semibold text-primaryColor text-2xl mb-3">
              Web & Mobile App Development
            </h3>
            <p className="mb-3">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <CustomButton text="LEARN MORE" />
          </div>
        </div>
        <div className="flex items-center lg:gap-x-24 gap-x-4 justify-center lg:mb-20 mb-16 max-sm:flex-wrap-reverse max-sm:text-center">
          <div className="lg:w-2/5 w-full">
            <h3 className="font-semibold text-primaryColor text-2xl mb-3">
              Digital Strategy Consulting
            </h3>
            <p className="mb-3">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <CustomButton text="LEARN MORE" />
          </div>
          <img src={digitalStrategy} alt="" className="lg:h-80 h-64" />
        </div>
        <div>
          <h3 className="font-semibold text-primaryColor text-2xl text-center mb-8">
            Frequently asked questions
          </h3>
          {accordionData.map((accordion, index) => (
            <CustomAccordion
              key={index}
              isExpanded={expandedIndex === index}
              onClicked={() => handleAccordionClick(index)}
              titleText={accordion.titleText}
              bodyText={accordion.bodyText}
            />
          ))}
        </div>
      </div>
      <footer
        className={`${
          menuOpen ? "hidden" : "bg-primaryColor pt-10 text-white text-sm"
        }`}
      >
        <div className="lg:flex w-11/12 mx-auto justify-between mb-10 flex-wrap">
          <div className="w-96 mb-8 max-sm:w-full">
            <img src={whiteLogo} alt="" className="h-6 mb-4" />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="xl:w-1/3 lg:w-2/5 w-2/3 flex justify-between max-sm:flex-wrap max-sm:gap-8">
            <div>
              <h3 className="font-medium mb-2 text-base">Our Technologies</h3>
              <ul>
                <li className="mb-1">React JS</li>
                <li className="mb-1">Gatsby</li>
                <li className="mb-1">NextJS</li>
                <li className="mb-1">NodeJS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2 text-base">Our Services</h3>
              <ul>
                <li className="mb-1">Social Media Marketing</li>
                <li className="mb-1">Web & Mobile App Development</li>
                <li className="mb-1">Data Analyst</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-5/6 mx-auto border-t-1 border-white pt-3 pb-6 text-center max-sm:w-11/12">
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </body>
  );
};
