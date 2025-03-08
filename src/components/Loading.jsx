import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../assets/bg5.jpg";
import astroGif from "../assets/astro3.gif";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigate = useNavigate();

  const loadingTexts = [
    "Connecting to the mainframe...",
    "Loading core modules...",
    "Establishing secure connection...",
    "Optimizing resources...",
    "Finalizing setup...",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          setLoadingComplete(true);

          setTimeout(() => {
            window.location.href =
              "https://demo.pixelwise.one/super_admin/login";
          }, 1000);

          return 100;
        }
        return oldProgress + 1;
      });
    }, 200);

    const textInterval = setInterval(() => {
      if (!loadingComplete) {
        setLoadingStep((prevStep) => (prevStep + 1) % loadingTexts.length);
        setAnimateKey((prevKey) => prevKey + 1);
      }
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [loadingComplete]);

  useEffect(() => {
    const preventBack = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", preventBack);

    return () => {
      window.removeEventListener("popstate", preventBack);
    };
  }, []);

  return (
    // <div
    //   className="flex justify-center items-center min-h-screen bg-cover bg-center relative p-4 sm:p-6 md:p-8"
    //   style={{ backgroundImage: `url(${bgimg})` }}
    // >
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center md:bg-top relative p-4 sm:p-6 md:p-8"
      style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover" }}
    >
      <div className="relative text-white p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          Please Wait...
        </h2>

        <div className="mb-4 flex justify-center items-center h-40 sm:h-52 md:h-56 overflow-hidden">
          <img
            src={astroGif}
            alt="Loading Animation"
            className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-48 rounded-lg rotate-fixed scale-150"
          />
        </div>

        <p
          key={animateKey}
          className={`text-sm sm:text-base md:text-lg mb-3 ${
            loadingComplete ? "" : "animate-fade-slide"
          }`}
        >
          {loadingTexts[loadingStep]}
        </p>

        <p className="text-sm sm:text-base md:text-lg text-white mb-5 font-medium">
          Crafting Your Tailored CRM Solution
        </p>

        <div className="w-full h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden shadow-cyan-500/50">
          <div
            className="h-full bg-gradient-to-r from-[#AC5EAC] to-[#5C22A2] transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-slide {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-slide {
            animation: fade-slide 0.7s ease-in-out;
          }
          .rotate-fixed {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
