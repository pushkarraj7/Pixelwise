//WITHOUT API


// import { useEffect, useState } from "react";
// import dashboardGif from "../assets/dashboardgif.mp4";
// import usersGif from "../assets/usersgif.mp4";
// import tenantsGif from "../assets/tenantsgif.mp4";
// import billGif from "../assets/billgif.mp4";
// import dataGif from "../assets/datagif.mp4";
// import gatepassGif from "../assets/gatepassgif.mp4";
// import maintenanceGif from "../assets/maintenancegif.mp4";
// import technicianGif from "../assets/techniciangif.mp4";
// import ticketsGif from "../assets/ticketsgif.mp4";
// import workGif from "../assets/workgif.mp4";
// import backgroundImage from "../assets/background5.webp";
// import logo from "../assets/blacklogo.png";
// import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const cards = [
//   {
//     id: 0,
//     title: "Dashboard",
//     video: dashboardGif,
//     features: [
//       "Analytics",
//       "Real-Time Data Tracking",
//       "Dynamic Graphs",
//       "Meme Customization",
//       "Real-Time Notifications",
//     ],
//   },
//   {
//     id: 1,
//     title: "Occupants",
//     video: tenantsGif,
//     features: [
//       "Add Tenants / Owners",
//       "Add Multiple Docs",
//       "Real-Time Graphs",
//       "Easy Editable",
//       "Data Filtering",
//     ],
//   },
//   {
//     id: 2,
//     title: "AMC",
//     video: maintenanceGif,
//     features: [
//       "AMC Frequency",
//       "Popup Reminders",
//       "Snooze Reminders",
//       "Auto Notification",
//       "Add Items in AMC",
//     ],
//   },
//   {
//     id: 3,
//     title: "Users",
//     video: usersGif,
//     features: [
//       "Manage Users",
//       "Manager Privileges",
//       "Add/Edit/Delete Users",
//       "User Roles",
//       "Dynamic UI",
//     ],
//   },
//   {
//     id: 4,
//     title: "Technicians",
//     video: technicianGif,
//     features: [
//       "Analytics",
//       "Real-Time Data Tracking",
//       "Dynamic Graphs",
//       "Theme Customizations",
//       "Real-Time Notifications",
//     ],
//   },
//   {
//     id: 5,
//     title: "Tickets",
//     video: ticketsGif,
//     features: [
//       "Raise Tickets",
//       "Assign Technicians",
//       "Add Comments",
//       "Rate Technician Work",
//       "Assign Multiple Technicians",
//     ],
//   },
//   {
//     id: 6,
//     title: "Work Permit",
//     video: workGif,
//     features: [
//       "Manage Users",
//       "Privileges",
//       "Add/Edit/Delete",
//       "Dynamic UI",
//       "Multiple Checkpoints",
//     ],
//   },
//   {
//     id: 7,
//     title: "Gate Pass",
//     video: gatepassGif,
//     features: [
//       "Easy to Make",
//       "Easy to Print",
//       "Approval Layers",
//       "Real-Time Tracking",
//       "Managers Can Add Remarks",
//     ],
//   },
//   {
//     id: 8,
//     title: "Visitor Data",
//     video: dataGif,
//     features: [
//       "QR Based",
//       "Approval Process",
//       "Easy Registration",
//       "Visiting History",
//       "Digital Badge",
//     ],
//   },
//   {
//     id: 9,
//     title: "Bills",
//     video: billGif,
//     features: [
//       "Easy to Generate",
//       "Send Bill to Mail & WhatsApp",
//       "Auto Generation",
//       "Realtime Tracking",
//       "Overdue Notification",
//     ],
//   },
// ];


// export default function FeatureShowcase() {
//   const [currentCard, setCurrentCard] = useState(0);
//   const [visibleStart, setVisibleStart] = useState(0);
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleAddFeature = () => {
//     const newFeature = cards[currentCard];
//     setSelectedCards((prev) => {
//       if (!prev.some((card) => card.id === newFeature.id)) {
//         return [...prev, newFeature];
//       }
//       return prev;
//     });
//   };

//   const handleNext = () => {
//     setCurrentCard((prev) => (prev + 1) % cards.length);
//   };

//   const handlePrevSmall = () => {
//     setVisibleStart((prev) => Math.max(0, prev - 1));
//   };

//   const handleNextSmall = () => {
//     setVisibleStart((prev) => Math.min(cards.length - 5, prev + 1));
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center p-6 pt-20 overflow-x-hidden relative">
//       {/* Main Feature Display */}
//       <div className="bg-white w-full max-w-6xl h-auto rounded-lg pt-6 pb-6 justify-center items-center flex flex-col relative">
//         {/* Logo at the Top-Right Corner */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="absolute top-2 right-2 h-[14px] sm:h-[12px] md:h-[17px] lg:h-[16px] z-10"
//         />
//         <div className="flex flex-wrap lg:flex-nowrap w-full sm:w-4/5 max-w-6xl rounded-lg overflow-hidden gap-10 items-center justify-center mx-auto flex-grow">
//           <div className="w-full lg:w-1/2 md:w-1/2 h-[250px] sm:h-[300px] rounded-lg p-4 flex justify-center items-center">
//             <video
//               key={cards[currentCard].id}
//               className="w-full max-h-[250px] sm:max-h-[300px] object-contain rounded-lg"
//               autoPlay
//               loop
//               muted
//             >
//               <source src={cards[currentCard].video} type="video/mp4" />
//             </video>
//           </div>

//           <div
//             className="relative h-auto bg-cover bg-center p-4 text-white rounded-lg flex flex-col justify-center items-center w-full"
//             style={{ backgroundImage: `url(${backgroundImage})` }} // Corrected
//           >
//             <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md shadow-md w-4/5 sm:w-3/4 mt-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
//                 {cards[currentCard].title}
//               </h2>
//               <ul className="text-white text-xs sm:text-sm text-left space-y-2">
//                 {cards[currentCard].features.map((feature, index) => (
//                   <li key={index} className="pl-2">
//                     • {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-4 flex flex-wrap justify-center gap-4 w-full">
//               <button
//                 onClick={handleAddFeature}
//                 className="flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 hover:font-bold shadow-lg px-4 py-2 rounded-md cursor-pointer text-base"
//               >
//                 <svg
//                   className="w-4 h-4 me-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 18 21"
//                 >
//                   <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//                 </svg>
//                 Add Feature
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="flex items-center text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 hover:font-bold shadow-lg px-4 sm:px-5 py-1.5 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base"
//               >
//                 Next
//                 <svg
//                   className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 flex flex-col items-center justify-center w-full max-w-4xl">
//         <div className="flex items-center justify-center w-full overflow-hidden relative">
//           <button
//             onClick={handlePrevSmall}
//             className={`text-2xl pr-4 cursor-pointer text-white transition-opacity duration-300 ${
//               visibleStart === 0
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100"
//             }`}
//             disabled={visibleStart === 0}
//           >
//             <FaChevronLeft />
//           </button>

//           <div className="w-[90%] sm:w-4/5 overflow-hidden">
//             <div
//               className="flex gap-2.5 lg:gap-7 transition-transform duration-300 ease-in-out"
//               style={{ transform: `translateX(-${visibleStart * 140}px)` }}
//             >
//               {cards.map((card) => (
//                 <div
//                   key={card.id}
//                   className={`min-w-[110px] sm:min-w-[120px] max-w-[130px] sm:max-w-[140px] !h-[30px] bg-black text-white p-0 flex items-center justify-center text-center rounded-lg shadow-md cursor-pointer text-xs sm:text-sm ${
//                     card.id === currentCard
//                       ? "bg-white !text-black font-bold border-2 border-black"
//                       : ""
//                   }`}
//                   onClick={() => setCurrentCard(card.id)}
//                 >
//                   <h3>{card.title}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={handleNextSmall}
//             className={`text-2xl pl-4 cursor-pointer text-white transition-opacity duration-300 ${
//               visibleStart >= cards.length - 4
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100"
//             }`}
//             disabled={visibleStart >= cards.length - 4}
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>

//       {/* Sticky Button */}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="fixed bottom-4 right-4 bg-[#34CCCC] text-white px-6 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-2"
//       >
//         <svg
//           className="w-4 h-4"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 18 21"
//         >
//           <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//         </svg>
//         <span>({selectedCards.length})</span>
//       </button>

//       {isModalOpen && (
//         <>
//           {/* Background Overlay with Blur */}
//           <div
//             className="fixed inset-0 backdrop-blur-md bg-black/50 z-40"
//             onClick={() => setIsModalOpen(false)}
//           ></div>

//           {/* Right-Side Modal */}
//           <div className="fixed top-0 right-0 h-full max-h-screen w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white shadow-lg p-6 overflow-y-auto text-black z-50 transition-transform duration-300">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-gray-600 hover:text-black bg-gray-200 hover:bg-gray-300 transition duration-200 ease-in-out px-3 py-1.5 rounded-md shadow cursor-pointer"
//               onClick={() => setIsModalOpen(false)}
//               aria-label="Close"
//             >
//               <svg
//                 className="w-5 h-5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             <h2 className="text-lg font-bold mb-4">Selected Features</h2>
//             <div className="space-y-4">
//               {selectedCards.map((card) => (
//                 <div
//                   key={card.id}
//                   className="p-4 border rounded-md shadow-sm flex items-center gap-4 relative"
//                 >
//                   {/* Video on the Left */}
//                   <video
//                     src={card.video}
//                     autoPlay
//                     loop
//                     muted
//                     className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md"
//                   />

//                   {/* Content on the Right */}
//                   <div className="flex-1">
//                     <h1 className="font-bold">{card.title}</h1>
//                     <ul className="text-sm">
//                       {card.features.map((feature, index) => (
//                         <li key={index}>• {feature}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Delete Button */}
//                   <button
//                     className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out p-1.5 rounded-full cursor-pointer"
//                     onClick={() =>
//                       setSelectedCards((prev) =>
//                         prev.filter((c) => c.id !== card.id)
//                       )
//                     }
//                     aria-label="Delete"
//                   >
//                     <FaTrash className="w-5 h-5" />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Sticky Footer with Buttons */}
//             <div className="w-full flex flex-col sm:flex-row justify-center gap-3 mt-6 bottom-0 bg-white py-4 px-4">
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer w-full sm:w-auto"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 <svg
//                   className="w-3.5 h-3.5 me-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 18 21"
//                 >
//                   <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//                 </svg>
//                 Adding More Features
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer w-full sm:w-auto"
//                 onClick={() =>
//                   navigate("/signup", { state: { selectedCards } })
//                 }
//               >
//                 Proceed to Checkout
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }



//WITH API

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/blacklogo.png";
import backgroundImage from "../assets/background5.webp";

export default function FeatureShowcase() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [visibleStart, setVisibleStart] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://demo.pixelwise.one/homepage-data")
      .then((response) => response.json())
      .then((data) => setCards(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddFeature = () => {
    const newFeature = cards[currentCard];
    setSelectedCards((prev) => {
      if (!prev.some((card) => card.id === newFeature.id)) {
        return [...prev, newFeature];
      }
      return prev;
    });
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrevSmall = () => {
    setVisibleStart((prev) => Math.max(0, prev - 1));
  };

  const handleNextSmall = () => {
    setVisibleStart((prev) => Math.min(cards.length - 5, prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 pt-20 overflow-x-hidden relative">
      {cards.length > 0 && (
        <div className="bg-white w-full max-w-6xl h-auto rounded-lg pt-6 pb-6 flex flex-col items-center relative">
          {/* Logo at the Top-Right Corner */}
          <img
            src={logo}
            alt="Logo"
            className="absolute top-2 right-2 h-[14px] sm:h-[12px] md:h-[17px] lg:h-[16px] z-10"
          />
          <div className="flex flex-wrap lg:flex-nowrap w-full sm:w-4/5 max-w-6xl rounded-lg overflow-hidden gap-10 items-center justify-center mx-auto">
            <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] rounded-lg p-4 flex justify-center items-center">
              <video
                key={cards[currentCard]?.id}
                className="w-full max-h-[250px] sm:max-h-[300px] object-contain rounded-lg"
                autoPlay
                loop
                muted
              >
                <source
                  src={cards[currentCard]?.image || ""}
                  type="video/mp4"
                />
              </video>
            </div>

            <div
              className="relative h-auto bg-cover bg-center p-4 text-black rounded-lg flex flex-col justify-center items-center w-full"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md shadow-md w-4/5 sm:w-3/4 mt-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {cards[currentCard]?.title}
                </h2>
                <ul className="text-white text-xs sm:text-sm text-left space-y-2">
                  {cards[currentCard]?.features?.map((feature, index) => (
                    <li key={index} className="pl-2">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4 w-full">
                <button
                  onClick={handleAddFeature}
                  className="flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg px-4 py-2 rounded-md cursor-pointer text-base"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  Add Feature
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg px-4 py-2 rounded-md cursor-pointer text-base"
                >
                  Next
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-2"
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
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="flex items-center justify-center w-full overflow-hidden relative">
          <button
            onClick={handlePrevSmall}
            className={`text-2xl pr-4 cursor-pointer text-white transition-opacity duration-300 ${
              visibleStart === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={visibleStart === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="w-[90%] sm:w-4/5 overflow-hidden">
            <div
              className="flex gap-2.5 lg:gap-7 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${visibleStart * 140}px)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`min-w-[110px] max-w-[130px] h-[30px] bg-black text-white flex items-center justify-center rounded-lg cursor-pointer text-xs sm:text-sm ${
                    index === currentCard
                      ? "bg-white !text-black font-bold"
                      : ""
                  }`}
                  onClick={() => setCurrentCard(index)}
                >
                  <h3>{card.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNextSmall}
            disabled={visibleStart >= cards.length - 4}
            className={`text-2xl pl-4 cursor-pointer text-white transition-opacity duration-300 ${
              visibleStart >= cards.length - 4
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            // disabled={visibleStart >= cards.length - 4}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div>
        {/* Sticky Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-4 right-4 bg-[#34CCCC] text-white px-6 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          <span>({selectedCards.length})</span>
        </button>

        {isModalOpen && (
          <>
            {/* Background Overlay with Blur */}
            <div
              className="fixed inset-0 backdrop-blur-md bg-black/50 z-40"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Right-Side Modal */}
            <div className="fixed top-0 right-0 h-full max-h-screen w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white shadow-lg p-6 overflow-y-auto text-black z-50 transition-transform duration-300">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black bg-gray-200 hover:bg-gray-300 transition duration-200 ease-in-out px-3 py-1.5 rounded-md shadow cursor-pointer"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-lg font-bold mb-4">Selected Features</h2>
              <div className="space-y-4">
                {selectedCards.map((card) => (
                  <div
                    key={card.id}
                    className="p-4 border rounded-md shadow-sm flex items-center gap-4 relative"
                  >
                    {/* Video on the Left */}
                    <video
                      src={card.image}
                      autoPlay
                      loop
                      muted
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-md"
                    />

                    {/* Content on the Right */}
                    <div className="flex-1">
                      <h1 className="font-bold">{card.title}</h1>
                      <ul className="text-sm">
                        {card.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Delete Button */}
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out p-1.5 rounded-full cursor-pointer"
                      onClick={() =>
                        setSelectedCards((prev) =>
                          prev.filter((c) => c.id !== card.id)
                        )
                      }
                      aria-label="Delete"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Sticky Footer with Buttons */}
              <div className="w-full flex flex-col sm:flex-row justify-center gap-3 mt-6 bottom-0 bg-white py-4 px-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer w-full sm:w-auto"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    className="w-3.5 h-3.5 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  Adding More Features
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer w-full sm:w-auto"
                  onClick={() =>
                    navigate("/signup", { state: { selectedCards } })
                  }
                >
                  Proceed to Checkout
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
