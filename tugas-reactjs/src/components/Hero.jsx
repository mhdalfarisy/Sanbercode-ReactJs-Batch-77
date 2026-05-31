import React, { useState } from "react";

const Hero = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Mencari lowongan: "${keyword}" di lokasi: "${location}"`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/20 to-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-[1.15]">
            Temukan pekerjaan <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              dream job-mu di jobApp
            </span>
          </h1>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Cari ribuan lowongan kerja dari berbagai perusahaan terpercaya. Temukan peluang terbaik sesuai keahlianmu.
          </p>

          {/* Search Bar Form */}
          <form onSubmit={handleSearch} className="mt-8 rounded-2xl border border-gray-200 bg-white p-2 shadow-md sm:flex sm:items-center gap-2">
            <div className="flex flex-1 items-center gap-2 border-b border-gray-100 px-3 py-2 sm:border-b-0 sm:border-r">
              <span className="text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Posisi atau keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full text-sm text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 px-3 py-2">
              <span className="text-gray-400">📍</span>
              <input
                type="text"
                placeholder="Lokasi"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-sm text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gray-800 px-6 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-gray-900 sm:w-auto whitespace-nowrap active:scale-95"
            >
              Cari Lowongan
            </button>
          </form>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-600 lg:justify-start">
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 shadow-sm">
              <span className="text-emerald-500">✓</span> Mudah Digunakan
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 shadow-sm">
              <span className="text-emerald-500">✓</span> Lowongan Terpercaya
            </span>
          </div>
        </div>

        {/* Right Wireframe Illustration */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/3] w-full rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center relative overflow-hidden group shadow-inner">
            <span className="text-gray-300 text-6xl font-light select-none transition-transform group-hover:scale-110 duration-500">✕</span>
            
            {/* Floating UI Widget Card */}
            <div className="absolute bottom-6 right-6 w-44 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div className="h-2 w-16 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 w-full rounded bg-gray-100"></div>
                <div className="h-2 w-4/5 rounded bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
