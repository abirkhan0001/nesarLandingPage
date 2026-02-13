




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const FastestGrowingData = () => {
//   const fadeInRightToLeft = {
//     hidden: { opacity: 0, x: 50 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.2, duration: 0.6 },
//     }),
//   };

//   const firstRowScrollImages = [
//     "/images/Novel_AI.svg",
//     "/images/Open_AI.svg",
//     "/images/Google _AI.svg",
//   ];

//   const secondRowScrollImages = [
//     "/images/Carmool.svg",
//     "/images/docusighn.svg",
//     "/images/peloton.svg",
//     "/images/last_logo.svg",
//   ];

//   return (
//     <section className="w-full relative py-16 md:py-20 bg-[#F6F5F3]">
//       {/* Background Image */}
//       <div
//         className="absolute z-0"
//          style={{
//           top: "72px",
//            left: "320px",
//            transform: "translateX(-50%)",
//           width: "450px",
//           height: "190px",
//            backgroundImage: `url("/images/CardUnion.svg")`,
//            backgroundSize: "450px 300px",
//            backgroundPosition: "center",
//            backgroundRepeat: "no-repeat",
//          }}
//       />

//       <div className="relative z-10 max-w-[1100px] mx-auto px-6">

//         {/* Row 1 */}
//         <div className="flex items-center">

//           {/* Static First Column (Heading) */}
//           <motion.div
//             custom={1}
//             variants={fadeInRightToLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="flex items-center h-[68px] shrink-0"
//           >
//             <h2 className="font-['Inter_Tight'] text-[22px] font-normal text-[#1E1E1E] leading-[1.2] tracking-tight">
//               Fastest-growing data <br />
//               <span className="font-bold">security platform</span>
//             </h2>
//           </motion.div>

//           {/* Static Second Column */}
//           <div className="flex items-center justify-center h-[70px] mr-6 ml-8 bg-white border border-[#E8E8E6] rounded-md px-6 shadow-sm relative shrink-0 min-w-[160px]">
//             <div className="relative w-24 h-6">
//               <Image
//                 src="/images/FirstCard.svg"
//                 alt=""
//                 fill
//                 className="object-contain opacity-100"
//               />
//             </div>
//           </div>

//           {/* Infinite Scroll for remaining columns */}
//           <div className="overflow-hidden flex-1">
//             <div className="flex w-max animate-scroll gap-0">

//               {firstRowScrollImages.map((img, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-center h-[88px] bg-[#F6F5F3] border border-[#E8E8E6] rounded-md px-6 shadow-sm relative shrink-0 min-w-[160px]"
//                 >
//                   <div className="relative w-24 h-6">
//                     <Image
//                       src={img}
//                       alt=""
//                       fill
//                       className="object-contain opacity-50"
//                     />
//                   </div>
//                 </div>
//               ))}

//               {/* Duplicate for seamless scroll */}
//               {firstRowScrollImages.map((img, i) => (
//                 <div
//                   key={"dup-" + i}
//                   className="flex items-center justify-center h-[88px] bg-[#F6F5F3] border border-[#E8E8E6] rounded-md px-6 shadow-sm relative shrink-0 min-w-[160px]"
//                 >
//                   <div className="relative w-24 h-6">
//                     <Image
//                       src={img}
//                       alt=""
//                       fill
//                       className="object-contain opacity-50"
//                     />
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="flex items-center">

//           {/* Static Card */}
//           <div
//             className="flex items-center justify-center -ml-2 mr-5 h-[70px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative overflow-hidden shrink-0"
//             style={{ minWidth: "220px" }}
//           >
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/Group_8.svg"
//                 alt="Anthem"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Infinite Scroll */}
//           <div className="overflow-hidden flex-1">
//             <div className="flex w-max animate-scroll gap-0">

//               {secondRowScrollImages.map((img, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-center h-[88px] bg-[#F6F5F3] border border-[#E8E8E6] rounded-md px-6 shadow-sm relative shrink-0 min-w-[160px]"
//                 >
//                   <div className="relative w-24 h-6">
//                     <Image
//                       src={img}
//                       alt=""
//                       fill
//                       className="object-contain opacity-50"
//                     />
//                   </div>
//                 </div>
//               ))}

//               {secondRowScrollImages.map((img, i) => (
//                 <div
//                   key={"dup2-" + i}
//                   className="flex items-center justify-center h-[88px] bg-[#F6F5F3] border border-[#E8E8E6] rounded-md px-6 shadow-sm relative shrink-0 min-w-[160px]"
//                 >
//                   <div className="relative w-24 h-6">
//                     <Image
//                       src={img}
//                       alt=""
//                       fill
//                       className="object-contain opacity-50"
//                     />
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Scroll Animation */}
//       <style jsx>{`
//         .animate-scroll {
//           animation: scroll 20s linear infinite;
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FastestGrowingData;





"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FastestGrowingData = () => {
  const fadeInRightToLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const firstRowScrollImages = [
    "/images/Novel_AI.svg",
    "/images/Open_AI.svg",
    "/images/Google _AI.svg",
  ];

  const secondRowScrollImages = [
    "/images/Carmool.svg",
    "/images/docusighn.svg",
    "/images/peloton.svg",
    "/images/last_logo.svg",
  ];

  return (
    <section className="w-full relative py-16 md:py-20 bg-[#F6F5F3]">
      {/* Background Image */}
      <div
        className="absolute z-0 hidden sm:block "
        style={{
          top: "72px",
          left: "300px",
          transform: "translateX(-50%)",
          width: "450px",
          height: "190px",
          backgroundImage: `url("/images/CardUnion.svg")`,
          backgroundSize: "450px 300px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto ">

        {/* Row 1 */}
        <div className="flex items-center">

          {/* Heading */}
          <motion.div
            custom={1}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center h-auto shrink-0"
          >
            <h2 className="font-['Inter_Tight'] text-[18px] sm:text-[22px] md:text-[22px] font-normal text-[#1E1E1E] leading-[1.2] tracking-tight">
              Fastest-growing data <br />
              <span className="font-bold">security platform</span>
            </h2>
          </motion.div>

          {/* Static Card */}
          <div className="flex items-center  justify-center h-[50px] sm:h-[70px] md:h-[70px]   ml-8 mr-4 bg-white border border-[#E8E8E6] rounded-md px-3  shadow-sm relative shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[160px]">
            <div className="relative w-16 sm:w-24 h-5 sm:h-6">
              <Image
                src="/images/FirstCard.svg"
                alt=""
                fill
                className="object-contain opacity-100"
              />
            </div>
          </div>

          {/* Infinite Scroll */}
          <div className="overflow-hidden flex-1">
            <div className="flex w-max animate-scroll ">

              {[...firstRowScrollImages, ...firstRowScrollImages].map((img, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-[50px] sm:h-[70px] md:h-[88px] bg-[#F6F5F3] border border-[#E8E8E6] rounded-md px-3 sm:px-6 shadow-sm relative shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[160px]"
                >
                  <div className="relative w-16 sm:w-24 h-5 sm:h-6">
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-contain opacity-50"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center ">

          {/* Static Card */}
          <div className="flex items-center justify-center h-[50px] sm:h-[70px] md:h-[70px] bg-white border border-[#E8E8E6] rounded-md px-3 sm:px-4 shadow-sm relative shrink-0 min-w-[140px] sm:min-w-[180px] md:min-w-[220px]">
            <div className="relative w-16 sm:w-24 h-5 sm:h-6">
              <Image
                src="/images/Group_8.svg"
                alt="Anthem"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Infinite Scroll */}
          <div className="overflow-hidden flex-1 ml-2">
            <div className="flex w-max animate-scroll ">

              {[...secondRowScrollImages, ...secondRowScrollImages].map((img, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-[50px] sm:h-[70px] md:h-[88px] bg-[#F6F5F3] border border-[#E8E8E6] rounded-md px-3 sm:px-6 shadow-sm relative shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[160px]"
                >
                  <div className="relative w-16 sm:w-24 h-5 sm:h-6">
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-contain opacity-50"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
};

export default FastestGrowingData;
