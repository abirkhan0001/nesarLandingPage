




"use client";

import Image from "next/image";
import InputLogo from "../../public/images/input_logo.svg";
import HeroImage from "../../public/images/Group_10.svg";
import Btn from "../../public/images/BTN.svg";

const Hero = () => {
  return (
    <section className="w-full bg-[#F6F5F3] relative overflow-hidden">
      <div
        className="
          relative 
          flex flex-col lg:flex-row 
          justify-between items-start 
          gap-12 lg:gap-20
          px-6 lg:px-12
          pt-20 lg:pt-32
          max-w-7xl mx-auto
        "
      >
        {/* ================= Left Content ================= */}
        <div className="flex-1 flex flex-col items-start gap-6 lg:gap-8 relative z-20">
          
          {/* Left Decorative BG */}
          <div
            className="absolute -top-24 -left-32 w-[680px] h-[600px] z-0 hidden lg:block"
            style={{
              backgroundImage: `url("/images/BG_1.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Badge */}
          <div className="flex items-center h-[34px] rounded-[38px] border border-[#E2E1DD] bg-white/5 backdrop-blur-[14px] px-3 z-10">
            <div className="flex items-center justify-center -ml-2 w-[28px] h-[28px] rounded-full border border-[#F4F3ED] bg-white shadow-[0_2px_7px_rgba(219,214,205,0.94)]">
              <Image src={InputLogo} alt="Input Logo" width={11} height={12} />
            </div>
            <span className="ml-2 text-[13px] font-medium text-[#5B5B5B]">
              The AI-native data security platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[447px] text-[48px] lg:text-[64px] leading-[105%] font-semibold text-[#282622] z-10">
            Secure your data, wherever it lives.
          </h1>

          {/* Paragraph */}
          <p className="text-[#5B5B5B] text-base lg:text-lg z-10">
            Protect and control your data and AI, with the speed, scale, and
            precision thats only possible with Cyera.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 z-10">
<button
  className="
    w-[148px] h-[47px]
    flex flex-row items-center justify-center
    gap-[2px]
    rounded-[30px]
    bg-[#2D2D39]
    px-[20px] py-[14px]
    text-white
    text-[16px]
    font-normal
    overflow-hidden
    shadow-[inset_0px_1.4px_0.8px_0px_#63636A]
     hover:bg-[#4C4C5C]
    transition-colors duration-100
  "
>
  Create account
</button>







   <button
  className="
    group
    flex items-center
    gap-3
    rounded-full
    bg-[#EEEEEC]
    p-1
    transition-all duration-300 ease-in-out
    hover:bg-white
  "
>
  {/* White pill */}
  <span
    className="
      rounded-full
      bg-white
      px-4 py-3
      text-sm font-medium text-[#1A1A1A]
      transition-all duration-300
      group-hover:bg-transparent
    "
  >
    Download Report
  </span>

  {/* Arrow */}
  <span
    className="
      mr-3
      text-sm
      transition-all duration-300
      group-hover:opacity-0
      group-hover:-translate-x-2
    "
  >
    →
  </span>
</button>



            {/* <Image src={Btn} alt="Button Image" width={193} height={51} /> */}
          </div>
        </div>

        {/* ================= Right Image ================= */}
        <div className="flex-shrink-0 w-full h-[300px] sm:h-[400px] lg:w-[400px] lg:h-[450px] relative z-10">

          {/* Hero BG */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-[680px] h-[600px] z-0 hidden lg:block"
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
            className="object-contain lg:object-cover rounded-[37px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
