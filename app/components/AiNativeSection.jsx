


// "use client";

// import Image from "next/image";

// const FastestGrowingData = () => {
//   return (
//     <section className="w-full relative py-16 md:py-20 bg-[#F6F5F3]">

//       {/* Background Image */}
//       <div
//         className="absolute z-0"
//         style={{
//           top: "75px",
//           left: "320px",
//           transform: "translateX(-50%)",
//           width: "450px",
//           height: "190px",
//           backgroundImage: `url("/images/CardUnion.svg")`,
//           backgroundSize: "450px 300px",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       <div className="relative z-10 max-w-[1100px] mx-auto px-6">

//         {/* Row 1 */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5">

//           {/* Column 1 - Heading */}
//           <div className="flex mr-4 mt-4 items-center h-[68px]">
//             <h2 className="font-['Inter_Tight'] text-[22px] font-normal text-[#1E1E1E] leading-[1.2] tracking-tight">
//               Fastest-growing data <br />
//               <span className="font-bold">security platform</span>
//             </h2>
//           </div>

//           {/* Column 2 */}
//           <div className="flex items-center justify-center mr-3 mt-3 h-[70px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative">
//             <Image
//               src="/images/FirstCard.svg"
//               alt="DocuSign and AT&T"
//               width={200}
//               height={60}
//               className="object-contain"
//             />
//           </div>

//           {/* Column 3 */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative">
//             <div className="relative w-24 h-6">
//               <Image
//                 src="/images/Novel_AI.svg"
//                 alt="NovelAI"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//           {/* Column 4 */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative">
//             <div className="relative w-24 h-6">
//               <Image
//                 src="/images/Open_AI.svg"
//                 alt="OpenAI"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//           {/* Column 5 */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative">
//             <div className="relative w-28 h-6">
//               <Image
//                 src="/images/Google _AI.svg"
//                 alt="Google AI"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//         </div>

//         {/* Row 2 */}
//         <div className="flex gap-0.5">

//           {/* Column 1 - Anthem + LifeLabs (1.5x width) */}
//           <div className="flex items-center justify-center mt-3 -ml-3 mr-3   h-[70px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative overflow-hidden" style={{ flex: 1.5 }}>
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/Group_8.svg"
//                 alt="Anthem"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Column 2 - Carmoola */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative" style={{ flex: 1 }}>
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/Carmool.svg"
//                 alt="Carmoola"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//           {/* Column 3 - DocuSign */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative" style={{ flex: 1 }}>
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/docusighn.svg"
//                 alt="DocuSign"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//           {/* Column 4 - Peloton */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative" style={{ flex: 1 }}>
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/peloton.svg"
//                 alt="Peloton"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//           {/* Column 5 - Stability AI */}
//           <div className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative" style={{ flex: 1 }}>
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/last_logo.svg"
//                 alt="Stability AI"
//                 fill
//                 className="object-contain opacity-50"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FastestGrowingData;





"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FastestGrowingData = () => {
  const fadeInRightToLeft = {
    hidden: { opacity: 0, x: 50 }, // শুরু ডানদিকে
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="w-full relative py-16 md:py-20 bg-[#F6F5F3]">

      {/* Background Image */}
      <div
        className="absolute z-0"
          style={{
           top: "75px",
           left: "320px",
           transform: "translateX(-50%)",      
           width: "450px",         
           height: "190px",           
           backgroundImage: `url("/images/CardUnion.svg")`,           
           backgroundSize: "450px 300px",           
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5">

          {/* Column 1 - Heading (fade-in from right) */}
          <motion.div
            custom={1}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex mr-4 mt-4 items-center h-[68px]"
          >
            <h2 className="font-['Inter_Tight'] text-[22px] font-normal text-[#1E1E1E] leading-[1.2] tracking-tight">
              Fastest-growing data <br />
              <span className="font-bold">security platform</span>
            </h2>
          </motion.div>

          {/* Column 2 - Static */}
          <div className="flex items-center justify-center mr-3 mt-3 h-[70px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative">
            <Image
              src="/images/FirstCard.svg"
              alt="DocuSign and AT&T"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Column 3 */}
          <motion.div
            custom={2}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
          >
            <div className="relative w-24 h-6">
              <Image
                src="/images/Novel_AI.svg"
                alt="NovelAI"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            custom={3}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
          >
            <div className="relative w-24 h-6">
              <Image
                src="/images/Open_AI.svg"
                alt="OpenAI"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

          {/* Column 5 */}
          <motion.div
            custom={4}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
          >
            <div className="relative w-28 h-6">
              <Image
                src="/images/Google _AI.svg"
                alt="Google AI"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

        </div>

        {/* Row 2 */}
        <div className="flex gap-0.5 ">

          {/* Column 1 - Anthem + LifeLabs (Static & bigger) */}
          <div className="flex items-center justify-center mt-3 -ml-3 mr-3 h-[70px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative overflow-hidden" style={{ flex: 1.5 }}>
            <div className="relative w-full h-full">
              <Image
                src="/images/Group_8.svg"
                alt="Anthem"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Column 2 - Carmoola */}
          <motion.div
            custom={1}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
            style={{ flex: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/Carmool.svg"
                alt="Carmoola"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

          {/* Column 3 - DocuSign */}
          <motion.div
            custom={2}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
            style={{ flex: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/docusighn.svg"
                alt="DocuSign"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

          {/* Column 4 - Peloton */}
          <motion.div
            custom={3}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
            style={{ flex: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/peloton.svg"
                alt="Peloton"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

          {/* Column 5 - Stability AI */}
          <motion.div
            custom={4}
            variants={fadeInRightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center h-[88px] bg-white border border-[#E8E8E6] rounded-md px-4 shadow-sm relative"
            style={{ flex: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/last_logo.svg"
                alt="Stability AI"
                fill
                className="object-contain opacity-50"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FastestGrowingData;
