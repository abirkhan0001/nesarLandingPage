



// "use client";

// import Image from "next/image";
// import InputLogo from "../../public/images/input_logo.svg";
// import HeroImage from "../../public/images/Group_10.svg";
// import Arrow from "../../public/images/Arrow.svg";

// const Hero = () => {
//   return (
//     <section className="w-full bg-[#F6F5F3] relative overflow-hidden">
//       <div
//         className="
//           relative 
//           flex flex-col lg:flex-row 
//           items-center lg:items-start
//           justify-between 
//           gap-14 lg:gap-20
//           px-5 sm:px-8 lg:px-12
//           pt-24 sm:pt-28 lg:pt-36
//           pb-16
//           max-w-7xl mx-auto
//         "
//       >
//         {/* ================= LEFT ================= */}
//         <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 relative z-20">

//           {/* Decorative BG (Desktop only) */}
//           <div
//             className="absolute -top-28 -left-36 w-[680px] h-[600px] z-0 hidden lg:block"
//             style={{
//               backgroundImage: `url("/images/BG_1.svg")`,
//               backgroundSize: "cover",
//               backgroundPosition: "top center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />

//           {/* Badge */}
//           <div className="flex items-center h-[34px] rounded-[38px] border border-[#E2E1DD] bg-white/40 backdrop-blur-[10px] px-3 z-10">
//             <div className="flex items-center justify-center -ml-2 w-[28px] h-[28px] rounded-full border border-[#F4F3ED] bg-white shadow">
//               <Image src={InputLogo} alt="Input Logo" width={11} height={12} />
//             </div>
//             <span className="ml-2 text-[12px] sm:text-[13px] font-medium text-[#5B5B5B]">
//               The AI-native data security platform
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="
//             max-w-[520px]
//             text-[34px] sm:text-[42px] lg:text-[64px]
//             leading-[110%]
//             font-semibold
//             text-[#282622]
//             z-10
//           ">
//             Secure your data, wherever it lives.
//           </h1>

//           {/* Paragraph */}
//           <p className="max-w-[500px] text-[#5B5B5B] text-[15px] sm:text-base lg:text-lg z-10">
//             Protect and control your data and AI, with the speed, scale, and
//             precision thats only possible with Cyera.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-4 z-10">

//             {/* Primary Button */}
//             <button
//               className="
//                 w-[160px] h-[48px]
//                 flex items-center justify-center
//                 rounded-[30px]
//                 bg-[#2D2D39]
//                 text-white
//                 text-[15px]
//                 shadow-[inset_0px_1.4px_0.8px_0px_#63636A]
//                 hover:bg-[#4C4C5C]
//                 transition-colors duration-200
//               "
//             >
//               Create account
//             </button>

//             {/* Secondary Button */}
//             <button
//               className="
//                 group
//                 flex items-center
//                 gap-3
//                 rounded-full
//                 bg-[#EEEEEC]
//                 p-1
//                 transition-all duration-300
//                 hover:bg-white
//               "
//             >
//               <span
//                 className="
//                   rounded-full
//                   bg-white
//                   px-5 py-3
//                   text-sm font-medium text-[#1A1A1A]
//                   transition-all duration-300
//                   group-hover:bg-transparent
//                 "
//               >
//                 Download Report
//               </span>

//               <span
//                 className="
//                   mr-3
//                   text-sm
//                   transition-all duration-300
//                   group-hover:opacity-0
//                   group-hover:-translate-x-2
//                 "
//               >
//                     <Image
//             src={Arrow}
//             alt="Hero Image"
//             fill
//             className="object-contain lg:object-cover rounded-[30px]"
//             priority
//           />
//               </span>
//             </button>

//           </div>
//         </div>

//         {/* ================= RIGHT ================= */}
//         <div className="
//           relative
//           w-full
//           h-[260px]
//           sm:h-[360px]
//           md:h-[420px]
//           lg:w-[480px]
//           lg:h-[520px]
//           flex-shrink-0
//         ">

//           {/* Hero BG Desktop */}
//           <div
//             className="absolute -top-20 left-1/2 -translate-x-1/2 w-[680px] h-[600px] z-0 hidden lg:block"
//             style={{
//               backgroundImage: `url("/images/HeroBG.svg")`,
//               backgroundSize: "cover",
//               backgroundPosition: "top center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />

//           {/* Hero Image */}
//           <Image
//             src={HeroImage}
//             alt="Hero Image"
//             fill
//             className="object-contain lg:object-cover rounded-[30px]"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";

import Image from "next/image";
import InputLogo from "../../public/images/input_logo.svg";
import HeroImage from "../../public/images/Group_10.svg";
import Arrow from "../../public/images/Arrow.svg";

const Hero = () => {
  return (
    <section className="w-full bg-[#F6F5F3] relative overflow-hidden">
      <div
        className="
          relative 
          flex flex-col lg:flex-row 
          items-center lg:items-start
          justify-between 
          gap-14 lg:gap-20
          px-5 sm:px-8 lg:px-12
          pt-24 sm:pt-28 lg:pt-36
          pb-16
          max-w-7xl mx-auto
        "
      >
        {/* ================= LEFT ================= */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 relative z-20">

          {/* Decorative BG (Desktop only) */}
          <div
            className="absolute -top-28 -left-36 w-[680px] h-[600px] z-0 hidden lg:block"
            style={{
              backgroundImage: `url("/images/BG_1.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Badge */}
          <div className="flex items-center h-[34px] rounded-[38px] border border-[#E2E1DD] bg-white/40 backdrop-blur-[10px] px-3 z-10">
            <div className="flex items-center justify-center -ml-2 w-[28px] h-[28px] rounded-full border border-[#F4F3ED] bg-white shadow">
              <Image src={InputLogo} alt="Input Logo" width={11} height={12} />
            </div>
            <span className="ml-2 text-[12px] sm:text-[13px] font-medium text-[#5B5B5B]">
              The AI-native data security platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="
            max-w-[520px]
            text-[34px] sm:text-[42px] lg:text-[64px]
            leading-[110%]
            font-semibold
            text-[#282622]
            z-10
          ">
            Secure your data, wherever it lives.
          </h1>

          {/* Paragraph */}
          <p className="max-w-[500px] text-[#5B5B5B] text-[15px] sm:text-base lg:text-lg z-10">
            Protect and control your data and AI, with the speed, scale, and
            precision thats only possible with Cyera.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">

            {/* Primary Button */}
            <button
              className="
                w-[160px] h-[48px]
                flex items-center justify-center
                rounded-[30px]
                bg-[#2D2D39]
                text-white
                text-[15px]
                shadow-[inset_0px_1.4px_0.8px_0px_#63636A]
                hover:bg-[#4C4C5C]
                transition-colors duration-200
              "
            >
              Create account
            </button>

            {/* Secondary Button */}
            <button
              className="
                group
                flex items-center
                gap-3
                rounded-full
                bg-[#EEEEEC]
                p-1
                transition-all duration-300
                hover:bg-white
              "
            >
              <span
                className="
                  rounded-full
                  bg-white
                  px-5 py-3
                  text-sm font-medium text-[#1A1A1A]
                  transition-all duration-300
                  group-hover:bg-transparent
                "
              >
                Download Report
              </span>

              {/* Arrow Fixed */}
              <span
                className="
                  relative
                  w-5 h-5
                  mr-3
                  transition-all duration-300
                  group-hover:translate-x-1
                "
              >
                <Image
                  src={Arrow}
                  alt="Arrow Icon"
                  fill
                  className="object-contain"
                />
              </span>
            </button>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="
          relative
          w-full
          h-[260px]
          sm:h-[360px]
          md:h-[420px]
          lg:w-[480px]
          lg:h-[520px]
          flex-shrink-0
        ">

          {/* Hero BG Desktop */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[680px] h-[600px] z-0 hidden lg:block"
            style={{
              backgroundImage: `url("/images/HeroBG.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Hero Image */}
          <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            className="object-contain lg:object-cover rounded-[30px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
