// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Import the logo
// import backgroundImage from "../assets/background5.webp";

// const LandingPage = () => {
//     const [scrollText, setScrollText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setScrollText((prev) => prev.slice(1) + prev[0]);
//         }, 100);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div
//             className="min-h-screen flex flex-col items-center justify-between pb-4 text-white relative bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//         >

//             {/* Navbar */}
//             <nav className="w-full flex justify-between items-center p-4 bg-white/10 backdrop-blur-md">

//                 <img src={logo} alt="Logo" style={{ height: "40px" }} />
//                 <button className="flex items-center text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:font-bold font-medium rounded-lg text-sm px-5 py-2.5">
//                     Login
//                 </button>
//             </nav>

//             {/* Scrolling text */}
//             <div className="overflow-hidden w-full max-w-[600px] h-[15rem] bg-gray-200 p-2 text-center flex items-center justify-center text-black border-[3px] border-black/40 rounded-xl shadow-md relative">
//                 {/* Scrolling Text Wrapper */}
//                 <div className="w-full overflow-hidden whitespace-nowrap absolute">
//                     <p className="inline-block animate-marquee px-4 min-w-full">
//                         {scrollText}
//                     </p>
//                 </div>
//             </div>

//             {/* Instant Demo */}
//             <div className="text-center mt-8">
//                 <h1 className="text-2xl font-bold text-white">Instant Demo</h1>
//                 <div className="flex justify-center items-center mt-4">
//                     <Link to="/demo">
//                         <button
//                             type="button"
//                             className="flex items-center text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                         >
//                             Go to Demo
//                             <svg
//                                 className="w-3.5 h-3.5 ms-2"
//                                 aria-hidden="true"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 14 10"
//                             >
//                                 <path
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                                 />
//                             </svg>
//                         </button>
//                     </Link>
//                 </div>
//             </div>

//             {/* View more */}
//             <div className="mt-8">
//                 <button className="text-white underline bg-none border-none cursor-pointer">
//                     View more
//                 </button>
//             </div>

//         </div>
//     );
// };

// export default LandingPage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Import the logo
// import backgroundImage from "../assets/frontbg.jpg";

// const LandingPage = () => {
//     const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
//     const words = text.split(" ");
//     const [displayedText, setDisplayedText] = useState([]);
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         if (index < words.length) {
//             const timeout = setTimeout(() => {
//                 setDisplayedText((prev) => [...prev, words[index]]);
//                 setIndex(index + 1);
//             }, 100); // Typing speed
//             return () => clearTimeout(timeout);
//         }
//     }, [index, words]);

//     return (
//         <div
//             className="min-h-screen flex flex-col items-center justify-between pb-4 text-white relative bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//             {/* Navbar */}
//             <nav className="w-full flex justify-between items-center p-4 bg-white/10 backdrop-blur-md">
//                 <img src={logo} alt="Logo" className="h-10" />
//                 <button className="flex items-center text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
//                     Login
//                 </button>
//             </nav>

//             {/* Scrolling Typewriter Box */}
//             <div className="w-[600px] h-[200px] bg-gray-200 p-6 text-black border-[3px] border-black/40 rounded-xl shadow-md overflow-auto">
//                 <div className="w-full text-lg font-[revert] leading-relaxed break-words text-justify px-4">
//                     {displayedText.join(" ")} {/* Justified text with horizontal padding */}
//                 </div>
//             </div>

//             {/* Instant Demo */}
//             <div className="text-center mt-8">
//                 <h1 className="text-2xl font-bold text-white">Instant Demo</h1>
//                 <div className="flex justify-center items-center mt-4">
//                     <Link to="/demo2">
//                         <button className="flex items-center text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:font-bold font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">
//                             Go to Demo
//                             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                             </svg>
//                         </button>
//                     </Link>
//                 </div>
//             </div>

//             {/* View More */}
//             <div className="mt-8">
//                 <Link to="/demo">
//                     <button className="text-white underline border-none cursor-pointer hover:text-blue-300">
//                         View more
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default LandingPage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Import the logo
// import backgroundImage from "../assets/frontbg3.jpg";

// const LandingPage = () => {
//   const text =
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
//   const words = text.split(" ");

//   const [displayedText, setDisplayedText] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [isRestarting, setIsRestarting] = useState(false); // Track restart delay

//   useEffect(() => {
//     if (isRestarting) return; // Pause during restart delay

//     const timeout = setTimeout(() => {
//       if (index < words.length) {
//         setDisplayedText((prev) => [...prev, words[index]]);
//         setIndex(index + 1);
//       } else {
//         // Wait 2 seconds before restarting
//         setIsRestarting(true);
//         setTimeout(() => {
//           setDisplayedText([]);
//           setIndex(0);
//           setIsRestarting(false);
//         }, 1000);
//       }
//     }, 100); // Typing speed

//     return () => clearTimeout(timeout);
//   }, [index, words, isRestarting]);

//   const repeatedText = [...displayedText, ...words].join(" "); // Repeat once full text is displayed

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-between pb-4 text-white relative bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Navbar */}
//       <nav className="w-full flex justify-between items-center p-4">
//         <img src={logo} alt="Logo" className="h-10" />
//         <button className="flex items-center text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5">
//           Login
//         </button>
//       </nav>
//       <div className="flex flex-col items-center text-white">
//         {/* <p className="text-md text-[#F1B201] mt-10 leading-none">
//           AXIS/Mobi
//         </p> */}
//         <h1 className="text-4xl font-bold font-varelaround p-5 pt-10 leading-none text-center">
//           Real Estate <br /> Management System
//         </h1>

//         {/* Scrolling Typewriter Box */}
//         <div className="w-[600px] h-[200px] p-5 text-gray-300">
//           <div className="w-full text-md font-[revert] leading-relaxed break-words text-justify">
//             {displayedText.join(" ")}
//           </div>
//         </div>
//       </div>

//       {/* Instant Demo */}
//       <div className="text-center mt-8">
//         <div className="flex justify-center items-center mt-4">
//           <Link to="/demo2">
//             <button className="flex items-center text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 hover:font-bold font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">
//               Go to Demo
//               <svg
//                 className="w-3.5 h-3.5 ml-2"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* View More */}
//       <div className="mt-8">
//         <Link to="/demo2">
//           <button className="flex items-center gap-1 text-white border-none cursor-pointer hover:text-yellow-200 leading-none">
//             View more ↓
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//responsive

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/frontbg3.jpg";

const LandingPage = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const words = text.split(" ");

  const [displayedText, setDisplayedText] = useState([]);
  const [index, setIndex] = useState(0);
  const [isRestarting, setIsRestarting] = useState(false);

  useEffect(() => {
    if (isRestarting) return;

    const timeout = setTimeout(() => {
      if (index < words.length) {
        setDisplayedText((prev) => [...prev, words[index]]);
        setIndex(index + 1);
      } else {
        setIsRestarting(true);
        setTimeout(() => {
          setDisplayedText([]);
          setIndex(0);
          setIsRestarting(false);
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [index, words, isRestarting]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between pb-4 text-white relative bg-cover bg-center bg-no-repeat px-4 md:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 md:p-6">
        <img src={logo} alt="Logo" className="h-8 md:h-10" />
        <button className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2">
          Login
        </button>
      </nav>

      {/* Title Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-varelaround p-5 pt-0 leading-none">
          Real Estate <br className="hidden md:block" /> Management System
        </h1>

        {/* Scrolling Typewriter Box */}
        <div className="w-full max-w-xl h-auto p-4 text-gray-300 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] overflow-hidden">
          <p className="text-sm md:text-md leading-relaxed break-words text-justify">
            {displayedText.join(" ")}
          </p>
        </div>
      </div>

      {/* Instant Demo */}
      <div className="text-center mt-6 md:mt-8">
        <div className="flex justify-center items-center mt-4">
          <Link to="/demo2">
            <button className="flex items-center text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg shadow-yellow-500/50 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 cursor-pointer">
              Go to Demo
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* View More */}
      <div className="mt-6 md:mt-8">
        <Link to="/demo2">
          <button className="flex items-center gap-1 text-white border-none cursor-pointer hover:text-yellow-200 leading-none text-sm md:text-md">
            View more ↓
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
