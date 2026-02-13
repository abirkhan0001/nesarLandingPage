






// "use client";

// import Image from "next/image";

// const features = [
//   {
//     title: "Speed",
//     desc: "Discover, scan, and classify data, wherever it is, in minutes.",
//     image: "/images/speed.svg",
//   },
//   {
//     title: "Precision",
//     desc: "Classify data with super high precision, thanks to Cyera’s AI-native classification.",
//     image: "/images/precision.svg",
//     rotate: true,
//   },
//   {
//     title: "Scale",
//     desc: "Handle petabytes of rapidly growing enterprise data.",
//     image: "/images/scale.svg",
//   },
// ];

// const AiNativeSection = () => {
//   return (
//     <section className="relative w-full bg-[#F6F5F3] overflow-hidden pb-20">
      
//       {/* Flex wrapper for the three divs */}
//       <div className="flex flex-col md:flex-row justify-center items-start px-6 mb-20">
        
//         <div
//           className="relative z-10 w-full md:w-1/3 rounded-3xl px-10 mt-32 pt-[144px] pb-12 text-center"
//           style={{
//             backgroundImage: 'url("/images/Frame_34.svg")',
//             backgroundSize: "110% auto",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//         </div>

//         <div
//           className="relative z-10 w-full md:w-1/3 rounded-3xl px-10 pt-[140px] pb-12 text-center "
//           style={{
//             backgroundImage: 'url("/images/Vector.svg")',
//             backgroundSize: "110% auto",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <h2
//             className="w-[323px] h-[40px] mx-auto text-center font-['Inter_Tight'] text-[38px] font-semibold leading-[105%] tracking-[-0.02em] text-[#1A1A1A]"
//           >
//             AI-native at its core
//           </h2>
//           <p
//             className="mt-4 w-[406px] h-[46px] mx-auto text-center font-['Inter_Tight'] text-[15px] font-normal leading-[150%] tracking-[-0.02em] text-[#4C4B47]"
//           >
//             AI isn’t an add-on. It’s the core of our architecture, and the engine behind the world’s most advanced data security.
//           </p>
//         </div>

//         <div
//           className="relative z-10 w-full md:w-1/3 rounded-3xl px-10 pt-[140px] mt-32 pb-12 text-center overflow-hidden"
//           style={{
//             backgroundImage: 'url("/images/Frame_34.svg")',
//             backgroundSize: "110% auto",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//         </div>

//       </div>

//       {/* Feature cards */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-3xl p-6 shadow-xl transition-transform
//                 ${item.rotate ? "md:-rotate-6 md:-translate-y-6" : ""}`}
//             >
//               {/* Image */}
//               <div className="relative w-full h-40 mb-6 flex items-center justify-center">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={180}
//                   height={180}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-semibold text-[#1A1A1A]">
//                 {item.title}
//               </h3>
//               <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default AiNativeSection;

// "use client";

// import Image from "next/image";

// const features = [
//   {
//     title: "Speed",
//     desc: "Discover, scan, and classify data, wherever it is, in minutes.",
//     image: "/images/speed.svg",
//   },
//   {
//     title: "Precision",
//     desc: "Classify data with super high precision, thanks to Cyera’s AI-native classification.",
//     image: "/images/precision.svg",
//     rotate: true,
//   },
//   {
//     title: "Scale",
//     desc: "Handle petabytes of rapidly growing enterprise data.",
//     image: "/images/scale.svg",
//   },
// ];

// const AiNativeSection = () => {
//   return (
//     <section className="relative w-full bg-[#F6F5F3] overflow-hidden pb-20">
      
//       {/* Flex wrapper for the three divs */}
//       <div className="flex flex-col md:flex-row justify-center items-start px-6 mb-20 relative"
//       >
        

//         {/* ১ম div - overlay on top of ২য় */}
//         <div
//           className="absolute md:relative z-20 w-full md:w-1/3 rounded-3xl px-10 mt-32 pt-[144px] pb-12 text-center"
//           style={{
//             backgroundImage: 'url("/images/Frame_34.svg")',
//             backgroundSize: "110% auto",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//         </div>

//         {/* ২য় div - main content */}
//         <div
//           className="relative z-10 w-full md:w-1/3 rounded-3xl px-10 pt-[140px] pb-12 text-center"
//           style={{
//             backgroundImage: 'url("/images/Vector.svg")',
//             backgroundSize: "110% auto",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <h2 className="w-[323px] h-[40px] mx-auto text-center font-['Inter_Tight'] text-[38px] font-semibold leading-[105%] tracking-[-0.02em] text-[#1A1A1A]">
//             AI-native at its core
//           </h2>
//           <p className="mt-4 w-[406px] h-[46px] mx-auto text-center font-['Inter_Tight'] text-[15px] font-normal leading-[150%] tracking-[-0.02em] text-[#4C4B47]">
//             AI isn’t an add-on. It’s the core of our architecture, and the engine behind the world’s most advanced data security.
//           </p>
//         </div>

//         {/* ৩য় div - overlay on top of ২য় */}
//         <div
//           className="absolute md:relative z-20 w-full md:w-1/3 rounded-3xl px-10 pt-[140px] mt-32 pb-12 text-center overflow-hidden"
//           style={{
//             backgroundImage: 'url("/images/Frame_34.svg")',
//             backgroundSize: "110% auto",
//             backgroundPosition: "top center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//         </div>

//       </div>

//       {/* Feature cards */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-3xl p-6 shadow-xl transition-transform
//                 ${item.rotate ? "md:-rotate-6 md:-translate-y-6" : ""}`}
//             >
//               {/* Image */}
//               <div className="relative w-full h-40 mb-6 flex items-center justify-center">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={180}
//                   height={180}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-semibold text-[#1A1A1A]">
//                 {item.title}
//               </h3>
//               <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default AiNativeSection;


"use client";

import Image from "next/image";

const features = [
  {
    title: "Speed",
    desc: "Discover, scan, and classify data, wherever it is, in minutes.",
    image: "/images/speed.svg",
  },
  {
    title: "Precision",
    desc: "Classify data with super high precision, thanks to Cyera’s AI-native classification.",
    image: "/images/precision.svg",
    rotate: true,
  },
  {
    title: "Scale",
    desc: "Handle petabytes of rapidly growing enterprise data.",
    image: "/images/scale.svg",
  },
];

const AiNativeSection = () => {
  return (
    <section className="relative w-full bg-[#F6F5F3] overflow-hidden pb-16 sm:pb-20">

      {/* ================= Top Decorative Section ================= */}
      <div className="relative flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 mb-16 sm:mb-20">

        {/* Left Overlay (Hidden on Mobile) */}
        <div
          className="hidden md:block absolute left-0 md:relative md:w-1/3 rounded-3xl mt-20 md:mt-24 pt-[120px] pb-12"
          style={{
            backgroundImage: 'url("/images/Frame_34.svg")',
            backgroundSize: "110% auto",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Center Content */}
        <div
          className="relative z-10 w-full md:w-1/3 rounded-3xl px-6 sm:px-10 pt-[110px] sm:pt-[130px] pb-12 text-center"
          style={{
            backgroundImage: 'url("/images/Vector.svg")',
            backgroundSize: "110% auto",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-[110%] tracking-tight text-[#1A1A1A] max-w-[340px] sm:max-w-none mx-auto">
            AI-native at its core
          </h2>

          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] leading-[150%] text-[#4C4B47] max-w-[420px] mx-auto">
            AI isn’t an add-on. It’s the core of our architecture, and the engine behind the world’s most advanced data security.
          </p>
        </div>

        {/* Right Overlay (Hidden on Mobile) */}
        <div
          className="hidden md:block absolute right-0 md:relative md:w-1/3 rounded-3xl mt-20 md:mt-24 pt-[120px] pb-12"
          style={{
            backgroundImage: 'url("/images/Frame_34.svg")',
            backgroundSize: "110% auto",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />

      </div>

      {/* ================= Feature Cards ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch">

          {features.map((item, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg
                transition-transform duration-300
                ${item.rotate ? "md:-rotate-6 md:-translate-y-6" : ""}
              `}
            >
              {/* Image */}
              <div className="relative w-full h-32 sm:h-40 mb-6 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default AiNativeSection;
