


// "use client";

// import Image from "next/image";
// import AI from "../../public/images/Group_1806.png";
// import Lock from "../../public/images/Lock.svg";
// import Cloud from "../../public/images/CloudElips.svg";
// import BackgroundImage from "../../public/images/cludeBg.svg";
// import ElipsCard from "../../public/images/ElipsCard1.svg";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-[#F6F5F3] overflow-hidden border-t border-[#E2E1DD]">
//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative">
        
//         {/* Left Ellipse */}
//         <div className="absolute top-[530px] left-[-15px] w-[50px] h-[571px] z-0 pointer-events-none">
//           <Image
//             src="/images/ElipsLeft.svg"
//             alt="Left Decoration"
//             width={566}
//             height={571}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Hero Text */}
//         <div className="max-w-4xl mb-20 pb-40 border-b border-[#E2E1DD] relative">
//           <div
//             className="absolute -top-24 -left-32 w-[1600px] h-[600px] z-0 hidden lg:block"
//             style={{
//               backgroundImage: `url("/images/ElipsBg.svg")`,
//               backgroundSize: "cover",
//               backgroundPosition: "top center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//           <h1 className="w-[676px] h-[216px] text-[#9A9A9A] text-[48px] font-semibold">
//             Data is the most<br/>
//             <span className="text-[#1A1A1A]">valuable</span>{" "}
//             <span className="text-[#9A9A9A]">enterprise</span>{" "}
//             <span className="inline-flex items-center align-middle -mb-12 -ml-6 -mr-6">
//               <span className="inline-flex">
//                 <Image
//                   src={Lock}
//                   alt="Lock Icon"
//                   width={96}
//                   height={96}
//                   className="object-contain lg:object-cover rounded-[37px]"
//                 />
//                 <Image
//                   src={AI}
//                   alt="AI Icon"
//                   width={96}
//                   height={96}
//                   className="object-contain lg:object-cover rounded-[37px] -ml-14"
//                 />
//               </span>
//             </span>{" "}
//             <span className="text-[#1A1A1A]">asset,</span>
//             <br />
//             <span className="text-[#9B9B9B]">but also the hardest one to</span>
//             <br />
//             <span className="text-[#1A1A1A]">protect.</span>
//           </h1>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 ">
//           {/* Column 1 - Cloud Card */}
//           <div className="relative">
//             <div className="relative w-[514px] h-[518px] bg-white rounded-[20px] p-10 overflow-visible shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex flex-col justify-end">
              
//               {/* Top Ellipse */}
//               <div
//                 className="absolute -top-[54px] left-1/2 -translate-x-1/2 w-[566px] h-[320px] z-0 pointer-events-none -ml-16"
//                 style={{
//                   backgroundImage: 'url("/images/ElipsTop.svg")',
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "top center",
//                   backgroundSize: "contain",
//                 }}
//               />

//               {/* Center Cloud */}
//               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <div className="relative w-[59px] h-[40px]">
//                   <Image
//                     src={BackgroundImage}
//                     alt="Background"
//                     width={560}
//                     height={580}
//                     className="absolute inset-0 w-full h-full object-contain"
//                   />
//                   <Image
//                     src={Cloud}
//                     alt="Cloud Icon"
//                     width={59}
//                     height={40}
//                     className="absolute top-[11.36px] left-[1.55px] object-contain"
//                     style={{
//                       filter: `
//                         drop-shadow(0px 0.54px 0.92px rgba(12, 151, 96, 1))
//                         drop-shadow(0px 2.39px 3px rgba(9, 132, 83, 0.12))
//                         drop-shadow(0px 5.86px 3.81px rgba(12, 151, 96, 0.08))
//                       `,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Card content - bottom */}
//               <div className="relative z-10">
//                 <h3 className="text-[40px] font-bold text-[#1A1A1A] mb-4 leading-tight">
//                   Data is everywhere
//                 </h3>
//                 <p className="text-[16px] leading-[1.6] text-[#666666]">
//                   Data exists in the cloud and on-premises. Blind spots impact security and impede innovation.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Column 2 */}
//  {/* Column 2 */}
// <div className="flex flex-col justify-start gap-2 items-center lg:items-end ">
//   {/* Card 2 */}
//   <div className="relative w-[578px] h-[278px] rounded-[20px] overflow-hidden">
//     <Image
//       src={ElipsCard}
//       alt="Background"
//       width={578}
//       height={278}
//       className="w-full h-full object-cover rounded-[20px]"
//     />
//   </div>

//   {/* Card 3 */}
//   <div className="relative w-[578px] h-[278px] rounded-[20px] overflow-hidden">
//     <Image
//       src={ElipsCard}
//       alt="Background"
//       width={578}
//       height={278}
//       className="w-full h-full object-cover rounded-[20px]"
//     />
//   </div>
// </div> </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




"use client";

import Image from "next/image";
import AI from "../../public/images/Group_1806.png";
import Lock from "../../public/images/Lock.svg";
import Cloud from "../../public/images/CloudElips.svg";
import BackgroundImage from "../../public/images/cludeBg.svg";
import ElipsCard from "../../public/images/ElipsCard1.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F6F5F3] overflow-hidden border-t border-[#E2E1DD]">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-20 relative">

        {/* Left Ellipse (Decor) */}
        <div className="absolute top-[530px] left-0 w-12 h-[350px] sm:w-[50px] sm:h-[571px] z-0 pointer-events-none hidden md:block">
          <Image
            src="/images/ElipsLeft.svg"
            alt="Left Decoration"
            width={566}
            height={571}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hero Text */}
        <div className="relative max-w-4xl mb-12 sm:mb-20 border-b border-[#E2E1DD] pb-12 sm:pb-40">
          {/* Background */}
          <div
            className="absolute -top-24 -left-32 w-[1200px] h-[400px] lg:w-[1600px] lg:h-[600px] z-0 hidden lg:block"
            style={{
              backgroundImage: `url("/images/ElipsBg.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#9A9A9A] leading-snug">
            Data is the most<br />
            <span className="text-[#1A1A1A]">valuable</span>{" "}
            <span className="text-[#9A9A9A]">enterprise</span>{" "}
            <span className="inline-flex items-center -mb-6 -ml-4 sm:-mb-12 sm:-ml-6">
              <Image
                src={Lock}
                alt="Lock Icon"
                width={64}
                height={64}
                className="object-contain sm:object-cover rounded-[20px]"
              />
              <Image
                src={AI}
                alt="AI Icon"
                width={64}
                height={64}
                className="object-contain sm:object-cover rounded-[20px] -ml-10 sm:-ml-14"
              />
            </span>{" "}
            <span className="text-[#1A1A1A]">asset,</span>
            <br />
            <span className="text-[#9B9B9B]">but also the hardest one to</span>
            <br />
            <span className="text-[#1A1A1A]">protect.</span>
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Column 1 - Cloud Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[514px] h-auto lg:h-[518px] bg-white rounded-[20px] p-6 sm:p-10 shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex flex-col justify-end overflow-visible">
              
              {/* Top Ellipse */}
              <div
                className="absolute -top-12 sm:-top-[54px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[566px] h-[160px] sm:h-[320px] z-0 pointer-events-none"
                style={{
                  backgroundImage: 'url("/images/ElipsTop.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              />

              {/* Center Cloud */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[59px] h-[40px] sm:w-[59px] sm:h-[40px]">
                  <Image
                    src={BackgroundImage}
                    alt="Background"
                    width={560}
                    height={580}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <Image
                    src={Cloud}
                    alt="Cloud Icon"
                    width={59}
                    height={40}
                    className="absolute top-[11.36px] left-[1.55px] object-contain"
                    style={{
                      filter: `
                        drop-shadow(0px 0.54px 0.92px rgba(12, 151, 96, 1))
                        drop-shadow(0px 2.39px 3px rgba(9, 132, 83, 0.12))
                        drop-shadow(0px 5.86px 3.81px rgba(12, 151, 96, 0.08))
                      `,
                    }}
                  />
                </div>
              </div>

              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1A1A1A] mb-4 leading-tight">
                  Data is everywhere
                </h3>
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  Data exists in the cloud and on-premises. Blind spots impact security and impede innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 - Stacked Cards */}
          <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[578px] h-[160px] sm:h-[200px] lg:h-[278px] rounded-[20px] overflow-hidden">
              <Image
                src={ElipsCard}
                alt="Background"
                width={578}
                height={278}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>

            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[578px] h-[160px] sm:h-[200px] lg:h-[278px] rounded-[20px] overflow-hidden">
              <Image
                src={ElipsCard}
                alt="Background"
                width={578}
                height={278}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
