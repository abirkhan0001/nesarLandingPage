"use client";

import Image from "next/image";

const FastestGrowingData = () => {
  return (
    <section className="w-full bg-[#F6F5F3] py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Main container */}
        <div className="border border-[#E5E3DD] rounded-3xl bg-[#FAF9F6] p-6 md:p-10">
          
          {/* Heading */}
          <h2 className="font-['Inter_Tight'] text-xl md:text-2xl font-medium text-[#1E1E1E] mb-8 leading-tight">
            Fastest-growing data <br />
            <span className="font-semibold">security platform</span>
          </h2>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            
            {/* Row 1 - Merged cell with 2 logos */}
            <div className="col-span-2 flex items-center justify-around gap-6 h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-6 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/docusign.svg" 
                  alt="DocuSign" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
              <div className="relative w-20 h-6">
                <Image 
                  src="/images/AT&T.svg" 
                  alt="AT&T" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* NovelAI */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/NovelAI.svg" 
                  alt="NovelAI" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* OpenAI */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/OpenAI.svg" 
                  alt="OpenAI" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* Google AI */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/Google AI.svg" 
                  alt="Google AI" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* Row 2 - Merged cell with Anthem & LifeLabs */}
            <div className="col-span-2 flex items-center justify-around gap-6 h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-6 hover:shadow-sm transition-shadow">
              <div className="relative w-20 h-6">
                <Image 
                  src="/images/Anthem.svg" 
                  alt="Anthem" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
              <div className="relative w-20 h-6">
                <Image 
                  src="/images/LifeLabs.svg" 
                  alt="LifeLabs" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* Carmoola */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/Carmoola.svg" 
                  alt="Carmoola" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* DocuSign (second instance) */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/docusign.svg" 
                  alt="DocuSign" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* Peloton */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/Peloton.svg" 
                  alt="Peloton" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

            {/* Stability AI */}
            <div className="flex items-center justify-center h-[72px] md:h-[80px] rounded-2xl bg-white border border-[#E5E3DD] px-4 hover:shadow-sm transition-shadow">
              <div className="relative w-24 h-6">
                <Image 
                  src="/images/StabilityAI.svg" 
                  alt="Stability AI" 
                  fill
                  className="object-contain opacity-50 grayscale"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FastestGrowingData;