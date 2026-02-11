"use client";

import React from "react";
import Image from "next/image";
import Dashboard from "../components/Dashboard";

const steps = [
  { id: 1, title: "Discovery and classification", icon: "/images/Discover_icon.svg" },
  { id: 2, title: "Agentless deployment", icon: "/images/agentless-icon.svg" },
  { id: 3, title: "Govern identity access", icon: "/images/lock-icon.svg" },
  { id: 4, title: "Apply controls", icon: "/images/apply-icon.svg" },
  { id: 5, title: "Monitor risk", icon: "/images/monitor-icon.svg" },
];

const DataProcess = () => {
  return (
    <div className="relative w-full py-20 bg-[#F6F5F3] flex flex-col items-center">
          <div
            className="absolute top-24 -left-32 w-[680px] h-[600px] z-0 hidden lg:block"
            style={{
              backgroundImage: `url("/images/DataSecurityBG.png")`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />
      
      {/* HEADING */}
      <h2 className="text-[48px] font-semibold text-center mb-12">
        Data security across<br/> your enterprise
      </h2>

      {/* MAIN CARD */}
      <div
        className="
          flex
          w-[1126px] h-[500px]
          bg-[#FFFEFB]
          rounded-[24px]
          shadow-[0px_12px_40px_rgba(0,0,0,0.18),0px_2px_6px_rgba(0,0,0,0.12)]
        "
      >
        {/* LEFT PANEL */}
        <div className="w-[360px] p-8 space-y-3">
          {steps.map((step) => (
            <button
              key={step.id}
              className="
                flex items-center gap-[16px]
                text-[18px] font-regular font-interTight
                w-[290px] h-[52px]
                px-3
                bg-[#FCFBF8]
                border border-[#E1E1E1]
                rounded-[16px]
                transition-all duration-300
                transform
                hover:bg-[#D8FBE5]
                hover:border-[#88C19C]
                hover:-rotate-3

              "
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Image src={step.icon} alt={step.title} width={20} height={20} />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="scale-50 origin-top-left">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DataProcess;
