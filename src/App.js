import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./componenets/Home";
import Aboutme from "./componenets/Aboutme";
import Resume from "./componenets/Resume";
import Contact from "./componenets/Contact";
import Portfolio from "./componenets/Portfolio";
/// Links
/// Portfolio
// Home
// About Me
// Resume
// Contact

//Functions Javascript
//Display is HTML
//Style is CSS

///Tailwindcss is a css libary that has classes behind them to help you style your website

function App() {
  var [showHome, setShowHome] = useState(true);
  var [showAboutMe, setAboutMe] = useState(false);
  var [showPortfolio, setPortfolio] = useState(false);
  var [showResume, setResume] = useState(false);
  var [showContact, setContact] = useState(false);
  ///setHome(true) showHome = true
  ///showHome = true or false
  ///setHome(true)
  const showAboutPage = () => {
    setShowHome(false);
    setAboutMe(true);
    setPortfolio(false);
    setResume(false);
    setContact(false);
  };
  const showHomePage = () => {
    setShowHome(true);
    setAboutMe(false);
    setPortfolio(false);
    setResume(false);
    setContact(false);
  };

  const showPortfolioPage = () => {
    setShowHome(false);
    setAboutMe(false);
    setPortfolio(true);
    setResume(false);
    setContact(false);
  };
  const showResumePage = () => {
    setShowHome(false);
    setAboutMe(false);
    setPortfolio(false);
    setResume(true);
    setContact(false);
  };
  const showContactPage = () => {
    setShowHome(false);
    setAboutMe(false);
    setPortfolio(false);
    setResume(false);
    setContact(true);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-32 bg-amber-700">
        <div className="text-yellow-500 text-7xl absolute top-6 left-7 font-serif">
          Brian Lu
        </div>
        <div className="flex flex-row gap-x-6 cursor-pointer absolute top-[67px] border-solid border-b-2 right-5 text-lime-500 font-bold">
          <button
            className="hover:text-lime-900 "
            onClick={() => showHomePage()}
          >
            Home
          </button>
          <button
            className="hover:text-lime-900 "
            onClick={() => showAboutPage()}
          >
            About Me
          </button>
          <button
            className="hover:text-lime-900 "
            onClick={() => showPortfolioPage()}
          >
            Portfolio
          </button>
          <button
            className="hover:text-lime-900 "
            onClick={() => showResumePage()}
          >
            Resume
          </button>
          <button
            className="hover:text-lime-900 "
            onClick={() => showContactPage()}
          >
            Contact
          </button>
        </div>
      </div>
      {showHome && <Home />}
      {showAboutMe && <Aboutme />}
      {showPortfolio && <Portfolio />}
      {showContact && <Contact />}
      {showResume && <Resume />}
    </div>
  );
}

export default App;
