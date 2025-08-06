import React from "react";

const CliffFeatures = () => {
  const features = [
    {
      icon: "👓",
      title: "UV 400 Protection",
      description:
        "Blocks 100% of harmful UVA and UVB rays for optimal eye safety.",
    },
    {
      icon: "🔄",
      title: "Anti-Reflective Coating",
      description:
        "Reduces glare and eye strain for clearer vision in all conditions.",
    },
    {
      icon: "💎",
      title: "Scratch-Resistant",
      description: "Durable coating ensures long-lasting clarity and wear.",
    },
    {
      icon: "⚡",
      title: "Lightweight Design",
      description:
        "Ultra-comfortable frames that you can wear all day without fatigue.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with blur overlay */}
      <div className="absolute inset-0 bg-[url('/images/eyewear-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0" />

      <div className="w-8/12 mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced Lens Technology
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Experience unparalleled clarity and protection with Cliff&apos;s
            premium eyewear lenses.
          </p>
        </div>

        {/* Features Grid with Glassmorphism Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
            Explore All Features
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CliffFeatures;
