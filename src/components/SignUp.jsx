// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import dashboard1 from "../assets/dashboard1.jpg";
// import users2 from "../assets/users2.jfif";
// import amc2 from "../assets/amc2.jfif";

// const slides = [
//   {
//     image: dashboard1,
//     title: (
//       <>
//         AI and Big Data
//         <span className="text-blue-300"> Driven </span>
//         Marketing
//       </>
//     ),
//     text: "Axismobi is connected to all media types, \nthat includes top, medium-sized, \nand long-tail media.",
//   },
//   {
//     image: users2,
//     title: (
//       <>
//         AI and Big Data
//         <span className="text-blue-300"> Driven </span>
//         Marketing
//       </>
//     ),
//     text: "Axismobi is connected to all media types, \nthat includes top, medium-sized, \nand long-tail media.",
//   },
//   {
//     image: amc2,
//     title: (
//       <>
//         AI and Big Data
//         <span className="text-blue-300"> Driven </span>
//         Marketing
//       </>
//     ),
//     text: "Axismobi is connected to all media types, \nthat includes top, medium-sized, \nand long-tail media.",
//   },
// ];

// const Signup = () => {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = () => {
//     navigate("/loading", { state: { authType: "signup" } });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-black dark:bg-gray-900 justify-center items-center p-6">
//       {/* Left Section - Animated Card */}
//       <div className="w-full md:w-[60%] h-auto md:h-[90vh] bg-gradient-to-b from-white via-[#AC5EAC] to-black text-white rounded-2xl p-10 shadow-lg flex flex-col items-center justify-center overflow-hidden relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.8 }}
//             className="w-full flex flex-col items-center justify-center text-center"
//           >
//             <img
//               src={slides[currentSlide].image}
//               alt="Slide"
//               className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
//             />
//             <h1 className="text-xl md:text-3xl font-bold mb-2">
//               {slides[currentSlide].title}
//             </h1>
//             <p className="text-sm md:text-lg whitespace-pre-line">
//               {slides[currentSlide].text}
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Right Section - Signup Form */}
//       <div className="w-full md:w-[40%] flex justify-center items-center p-6">
//         <div className="relative p-6 rounded-lg shadow-2xl bg-black text-white dark:bg-gray-800 max-w-md w-full">
//           <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
//             Sign Up Account
//           </h2>
//           <p className="text-sm text-center text-gray-400 dark:text-gray-300 mb-4">
//             Enter your personal data to create an account
//           </p>
//           <form onSubmit={(e) => e.preventDefault()}>
//             {/* Full Name & Phone Number - Single Row */}
//             <div className="mb-4 mt-2 flex flex-row gap-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                   Phone Number
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="Enter your phone number"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
//             </div>

//             {/* Email & Password - Single Row */}
//             <div className="mb-4 flex flex-row gap-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-3 flex items-center text-gray-400 dark:text-gray-300"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? "🙈" : "👁️"}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Company Name & Skype ID - Single Row */}
//             <div className="mb-4 flex flex-row gap-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your company name"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                   Skype ID
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your skype id"
//                   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
//             </div>

//             {/* Company Address - Full Width */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
//                 Company Address
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your company address"
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//               />
//             </div>

//             {/* Sign Up Button */}
//             <button
//               type="button"
//               className="cursor-pointer text-black w-full bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 hover:font-bold"
//               onClick={handleSubmit}
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import dashboard1 from "../assets/dashboard1.jpg";
import users2 from "../assets/users2.jfif";
import amc2 from "../assets/amc2.jfif";

const slides = [
  {
    image: dashboard1,
    title: (
      <>
        AI and Big Data
        <span className="text-blue-300"> Driven </span>
        Marketing
      </>
    ),
    text: "Axismobi is connected to all media types, \nthat includes top, medium-sized, \nand long-tail media.",
  },
  {
    image: users2,
    title: (
      <>
        AI and Big Data
        <span className="text-blue-300"> Driven </span>
        Marketing
      </>
    ),
    text: "Axismobi is connected to all media types, \nthat includes top, medium-sized, \nand long-tail media.",
  },
  {
    image: amc2,
    title: (
      <>
        AI and Big Data
        <span className="text-blue-300"> Driven </span>
        Marketing
      </>
    ),
    text: "Axismobi is connected to all media types, \nthat includes top, medium-sized, \nand long-tail media.",
  },
];

const Signup = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    navigate("/loading", { state: { authType: "signup" } });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black dark:bg-gray-900 justify-center items-center p-6">
      {/* Left Section - Animated Card */}
      <div className="w-full md:w-[60%] h-auto md:h-[90vh] bg-gradient-to-b from-white via-[#AC5EAC] to-black text-white rounded-2xl p-10 shadow-lg flex flex-col items-center justify-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center text-center"
          >
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-sm md:text-lg whitespace-pre-line">
              {slides[currentSlide].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full md:w-[40%] flex justify-center items-center p-6">
        <div className="relative p-6 rounded-lg shadow-2xl bg-black text-white dark:bg-gray-800 max-w-md w-full">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
            Sign Up Account
          </h2>
          <p className="text-sm text-center text-gray-400 dark:text-gray-300 mb-4">
            Enter your personal data to create an account
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Full Name & Phone Number */}
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>

            {/* Email & Password */}
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 dark:text-gray-300"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            </div>

            {/* Company Name & Skype ID */}
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                  Skype ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your Skype ID"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>

            {/* Company Address - Full Width */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white pb-2 dark:text-gray-300">
                Company Address
              </label>
              <input
                type="text"
                placeholder="Enter your company address"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="button"
              className="cursor-pointer text-black w-full bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 hover:font-bold"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
