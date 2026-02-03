"use client";

import Image from "next/image";

const features = [
  {
    title: "Speed",
    desc: "Discover, scan, and classify data, wherever it is, in minutes.",
    image: "/images/speed.svg",
  },
  {
    title: "Precision",
    desc: "Classify data with super high precision, thanks to Cyera’s AI-native classification.",
    image: "/images/precision.svg",
    rotate: true,
  },
  {
    title: "Scale",
    desc: "Handle petabytes of rapidly growing enterprise data.",
    image: "/images/scale.svg",
  },
];

const AiNativeSection = () => {
  return (
    <section className="relative w-full py-24 bg-[#F6F5F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Center heading card */}
        <div className="relative z-10 mx-auto mb-20 max-w-xl text-center bg-white rounded-3xl px-10 py-12 shadow-lg">
          <h2 className="text-3xl font-semibold text-[#1A1A1A]">
            AI-native at its core
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            AI isn’t an add-on. It’s the core of our architecture, and the engine
            behind the world’s most advanced data security.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {features.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-6 shadow-xl transition-transform
                ${item.rotate ? "md:-rotate-6 md:-translate-y-6" : ""}
              `}
            >
              {/* Image */}
              <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#1A1A1A]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiNativeSection;
