

"use client";

import Image from "next/image";
import Logo from "../../public/images/Layer_1.svg";
import Dot from "../../public/images/NvbarImg.svg";

const Navbar = () => {
  return (
    <nav className="relative w-full bg-[#F6F5F3] overflow-visible">
      
      {/* Navbar */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto lg:absolute lg:top-[32px] lg:left-1/2 lg:-translate-x-1/2 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between border border-[#E2E1DD] bg-[#F6F5F3]">
        
        {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          className="w-[96px] sm:w-[110px] lg:w-[124px] h-auto object-contain"
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-[15px] lg:text-[16px] font-medium text-[#474747]">
          <li className="hover:text-[#70FACB] cursor-pointer">Platform</li>
          <li className="hover:text-[#70FACB] cursor-pointer">Solutions</li>
          <li className="hover:text-[#70FACB] cursor-pointer">Why Cyera</li>
          <li className="hover:text-[#70FACB] cursor-pointer">Resources</li>
          <li className="hover:text-[#70FACB] cursor-pointer">Company</li>
          <li className="hover:text-[#70FACB] cursor-pointer">Pricing</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-4 items-center">
          <button className="flex items-center gap-2 px-4 py-2 sm:py-3 rounded-[30px] border border-[#E2E1DD] bg-white text-sm">
            EN
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button className="px-4 py-2 sm:py-3 rounded-[30px] bg-[#2D2D39] text-white text-sm whitespace-nowrap">
            Get a demo
          </button>
        </div>
      </div>

      {/* Dot Decoration */}
      <div
  className="
    hidden lg:flex              /* Hidden on mobile & tablet, show only lg+ */
    absolute inset-x-0 -bottom-8
    justify-center
    pointer-events-none
    z-0
  "
>
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
