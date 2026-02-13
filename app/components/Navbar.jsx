

// "use client";

// import Image from "next/image";
// import Logo from "../../public/images/Layer_1.svg";
// import Dot from "../../public/images/NvbarImg.svg";

// const Navbar = () => {
//   return (
//     <nav className="relative w-full bg-[#F6F5F3] overflow-visible">
      
//       {/* Navbar */}
//       <div className="relative z-20 w-full max-w-[1360px] mx-auto lg:absolute lg:top-[32px]   lg:left-1/2 lg:-translate-x-1/2 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between border border-[#E2E1DD] bg-[#F6F5F3]">
        
//         {/* Logo */}
//         <Image
//           src={Logo}
//           alt="Logo"
//           className="w-[96px] sm:w-[110px] lg:w-[124px] h-auto object-contain hover:-rotate-6 hover:rounded-md transition-transform duration-300"
//         />

//         {/* Menu */}
//         <ul className="hidden md:flex gap-6 lg:gap-8 text-[15px] lg:text-[16px] font-medium text-[#474747]">
//           <li className="hover:text-[#7C7C7C] cursor-pointer">Platform</li>
//           <li className="hover:text-[#7C7C7C] cursor-pointer">Solutions</li>
//           <li className="hover:text-[#7C7C7C] cursor-pointer">Why Cyera</li>
//           <li className="hover:text-[#7C7C7C] cursor-pointer">Resources</li>
//           <li className="hover:text-[#7C7C7C] cursor-pointer">Company</li>
//           <li className="hover:text-[#7C7C7C] cursor-pointer">Pricing</li>
//         </ul>

//         {/* Buttons */}
//         <div className="flex gap-2 sm:gap-4 items-center">
//           <button className="flex items-center gap-2 px-4 py-2 sm:py-3 rounded-[30px] border border-[#E2E1DD] bg-white text-sm  hover:bg-[#7C7C7C] hover:text-white transition-colors duration-300">
//             EN
//             <svg
//               className="w-3 h-3"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>

//           <button
//   className="
//     w-[148px] h-[47px]
//     flex flex-row items-center justify-center
//     gap-[2px]
//     rounded-[30px]
//     bg-[#2D2D39]
//     px-[20px] py-[14px]
//     text-white
//     text-[16px]
//     font-normal
//     overflow-hidden
//     shadow-[inset_0px_1.4px_0.8px_0px_#63636A]
//     hover:bg-[#4C4C5C]
//     transition-colors duration-100
//   "
// >
//   Get a demo
// </button>
//         </div>
//       </div>

//       {/* Dot Decoration */}
//       <div
//   className="
//     hidden lg:flex              /* Hidden on mobile & tablet, show only lg+ */
//     absolute inset-x-0 -bottom-8
//     justify-center
//     pointer-events-none
//     z-0
//   "
// >
//   <Image
//     src={Dot}
//     alt="Decoration"
//     className="w-full max-w-[1360px] h-auto object-contain"
//     priority
//   />
// </div>

//     </nav>
//   );
// };

// export default Navbar;




"use client";

import Image from "next/image";
import Logo from "../../public/images/Layer_1.svg";

import Dot from "../../public/images/NvbarImg.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#F6F5F3]">

      {/* Navbar Container */}
      <div className="
        relative z-20
        w-full max-w-[1360px]
        mx-auto
        lg:absolute lg:top-[32px] lg:left-1/2 lg:-translate-x-1/2
        px-4 sm:px-6 lg:px-8
        py-4
        flex items-center justify-between
        border border-[#E2E1DD]
        bg-[#F6F5F3]
      ">

        {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          className="w-[100px] sm:w-[115px] lg:w-[124px] h-auto object-contain transition-transform duration-300 hover:-rotate-6"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-[15px] lg:text-[16px] font-medium text-[#474747]">
          <li className="hover:text-[#7C7C7C] cursor-pointer">Platform</li>
          <li className="hover:text-[#7C7C7C] cursor-pointer">Solutions</li>
          <li className="hover:text-[#7C7C7C] cursor-pointer">Why Cyera</li>
          <li className="hover:text-[#7C7C7C] cursor-pointer">Resources</li>
          <li className="hover:text-[#7C7C7C] cursor-pointer">Company</li>
          <li className="hover:text-[#7C7C7C] cursor-pointer">Pricing</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Language Button (Hide on very small) */}
         <button className="hidden sm:flex group items-center gap-2 px-4 py-2 rounded-[30px] border border-[#E2E1DD] bg-white text-sm hover:text-gray-600 transition-colors duration-300">
  EN
  <svg
    className="w-3 h-3 transition-all duration-300 group-hover:scale-150"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


          {/* Demo Button (Resize on mobile) */}
          <button
            className="
              px-5 py-2.5
              sm:px-6 sm:py-3
              rounded-[30px]
              bg-[#2D2D39]
              text-white
              text-[14px] sm:text-[16px]
              shadow-[inset_0px_1.4px_0.8px_0px_#63636A]
              hover:bg-[#4C4C5C]
              transition-colors duration-200
            "
          >
            Get a demo
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setOpen(!open)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F6F5F3] border-t border-[#E2E1DD] px-6 py-6 space-y-4 text-[15px] font-medium text-[#474747]">
          <div>Platform</div>
          <div>Solutions</div>
          <div>Why Cyera</div>
          <div>Resources</div>
          <div>Company</div>
          <div>Pricing</div>
        </div>
      )}

      {/* Dot Decoration */}
      <div className="hidden lg:flex absolute inset-x-0 -bottom-8 justify-center pointer-events-none z-0">
        <Image
          src={Dot}
          alt="Decoration"
          className="w-full max-w-[1360px] h-auto object-contain"
          priority
        />
      </div>

    </nav>
  );
};

export default Navbar;
