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
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 relative">
        
        {/* Left Ellipse */}
        <div className="absolute top-[530px] left-[-15px] w-[50px] h-[571px] z-0 pointer-events-none">
          <Image
            src="/images/ElipsLeft.svg"
            alt="Left Decoration"
            width={566}
            height={571}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Hero Text */}
        <div className="max-w-4xl mb-20 pb-40 border-b border-[#E2E1DD] relative">
          <div
            className="absolute -top-24 -left-32 w-[1600px] h-[600px] z-0 hidden lg:block"
            style={{
              backgroundImage: `url("/images/ElipsBg.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <h1 className="w-[676px] h-[216px] text-[#9A9A9A] text-[48px] font-semibold">
            Data is the most<br/>
            <span className="text-[#1A1A1A]">valuable</span>{" "}
            <span className="text-[#9A9A9A]">enterprise</span>{" "}
            <span className="inline-flex items-center align-middle -mb-12 -ml-6 -mr-6">
              <span className="inline-flex">
                <Image
                  src={Lock}
                  alt="Lock Icon"
                  width={96}
                  height={96}
                  className="object-contain lg:object-cover rounded-[37px]"
                />
                <Image
                  src={AI}
                  alt="AI Icon"
                  width={96}
                  height={96}
                  className="object-contain lg:object-cover rounded-[37px] -ml-14"
                />
              </span>
            </span>{" "}
            <span className="text-[#1A1A1A]">asset,</span>
            <br />
            <span className="text-[#9B9B9B]">but also the hardest one to</span>
            <br />
            <span className="text-[#1A1A1A]">protect.</span>
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Column 1 - Cloud Card */}
          <div className="relative">
            <div className="relative w-[514px] h-[518px] bg-white rounded-[20px] p-10 overflow-visible shadow-[0px_4px_24px_rgba(0,0,0,0.08)] flex flex-col justify-end">
              
              {/* Top Ellipse */}
              <div
                className="absolute -top-[54px] left-1/2 -translate-x-1/2 w-[566px] h-[320px] z-0 pointer-events-none -ml-16"
                style={{
                  backgroundImage: 'url("/images/ElipsTop.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              />

              {/* Center Cloud */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[59px] h-[40px]">
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

              {/* Card content - bottom */}
              <div className="relative z-10">
                <h3 className="text-[40px] font-bold text-[#1A1A1A] mb-4 leading-tight">
                  Data is everywhere
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#666666]">
                  Data exists in the cloud and on-premises. Blind spots impact security and impede innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-start gap-2 items-center lg:items-end ">
            {/* Card 2 */}
            <div
              className="relative w-[578px] h-[278px] bg-[#FFFFFF] rounded-[20px] p-10 shadow-[-0.5px_-0.5px_0px_0px_rgba(0,0,0,0.10),2.5px_2.5px_3px_-2.5px_rgba(0,0,0,0.15)]">

                 <Image
                    src={ElipsCard}
                    alt="Background"
                    width={578}
                    height={278}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
            </div>

            {/* Card 3 */}
            <div
              className="relative w-[578px] h-[278px] bg-[#FFFFFF] rounded-[20px] p-10 shadow-[-0.5px_-0.5px_0px_0px_rgba(0,0,0,0.10),2.5px_2.5px_3px_-2.5px_rgba(0,0,0,0.15)]">

                 <Image
                    src={ElipsCard}
                    alt="Background"
                    width={578}
                    height={278}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
