


import Image from "next/image";

const logos = [
  { src: "/images/Google AI.svg", alt: "Google AI" },
  { src: "/images/AT&T.svg", alt: "AT&T" },
  { src: "/images/NovelAI.svg", alt: "NovelAI" },
  { src: "/images/OpenAI.svg", alt: "OpenAI" },
  { src: "/images/Anthem.svg", alt: "Anthem" },
  { src: "/images/LifeLabs.svg", alt: "LifeLabs" },
  { src: "/images/Carmoola.svg", alt: "Carmoola" },
  { src: "/images/Peloton.svg", alt: "Peloton" },
  { src: "/images/StabilityAI.svg", alt: "Stability AI" },
];

const FastestGrowingData = () => {
  return (
    <section className="w-full bg-[#F6F5F3] py-24">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="border border-[#E5E3DD] rounded-2xl bg-[#FAF9F6] p-8">
          <p className="text-[18px] font-medium text-[#1E1E1E] mb-6">
            Fastest-growing data <br />
            security platform
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[56px] rounded-xl bg-white border border-[#E5E3DD] opacity-70 hover:opacity-100 transition"
              >
                <Image src={logo.src} alt={logo.alt} width={90} height={28} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastestGrowingData;
