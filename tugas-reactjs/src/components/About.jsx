import React from "react";

const About = () => {
  const keunggulan = [
    { title: "Ribuan Lowongan", desc: "Akses karir luas" },
    { title: "Perusahaan Terpercaya", desc: "Verifikasi ketat" },
    { title: "Proses Mudah", desc: "One-click apply" },
  ];

  return (
    <section className="border-t border-gray-100 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        
        {/* Left Side Wireframe with Dot Pattern */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Decorative Dot Grid Pattern */}
          <div className="absolute -left-4 -top-4 grid grid-cols-3 gap-2 opacity-60">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
          <div className="aspect-[4/3] w-full rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center shadow-inner">
            <span className="text-gray-300 text-6xl font-light select-none">✕</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase">
            Tentang jobApp
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kami membantu kamu <br /> menemukan peluang terbaik
          </h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            jobApp adalah platform pencarian kerja yang memudahkan kamu menemukan lowongan, melamar, dan terhubung dengan perusahaan impian secara transparan dan aman.
          </p>

          {/* 3 Main Features Grid */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {keunggulan.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-center transition-all hover:bg-white hover:shadow-md lg:items-start lg:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white font-mono text-xs text-gray-400 shadow-sm">
                  ✕
                </div>
                <h4 className="mt-3 text-xs font-bold text-gray-800 sm:text-sm">{item.title}</h4>
                <div className="mt-2 h-1.5 w-12 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
