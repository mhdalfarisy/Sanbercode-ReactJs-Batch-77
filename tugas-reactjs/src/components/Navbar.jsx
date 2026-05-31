import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-gray-700 font-bold text-gray-700 transition-transform group-hover:scale-105">
            ✕
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            job<span className="text-blue-600">App</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-blue-600 transition-colors">Beranda</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Lowongan</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Perusahaan</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Tentang</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 active:bg-gray-100">
            Masuk
          </button>
          <button className="rounded-xl bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-900 hover:shadow-sm active:scale-95">
            Daftar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
