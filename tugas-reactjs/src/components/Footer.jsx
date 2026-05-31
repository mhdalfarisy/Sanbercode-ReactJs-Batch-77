import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-600 mb-12">
        {/* Logo & Info */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center space-x-2 font-bold text-lg text-gray-800">
            <div className="w-6 h-6 border border-gray-400 flex items-center justify-center">
              <span className="text-[10px]">✕</span>
            </div>
            <span>jobApp</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Platform pencarian kerja yang membantu kamu menemukan pekerjaan impian.
          </p>
          {/* Social Media Mock Icons */}
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:border-gray-500 transition-colors">✕</div>
            ))}
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h5 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">Navigasi</h5>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Beranda</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Lowongan</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Perusahaan</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Tentang</a></li>
          </ul>
        </div>

        {/* Perusahaan */}
        <div>
          <h5 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">Perusahaan</h5>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Pasang Lowongan</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h5 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">Bantuan</h5>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Pusat Bantuan</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">Newsletter</h5>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            Dapatkan update lowongan terbaru dan tips karir setiap minggu.
          </p>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-gray-500 transition-colors">
            <input type="email" placeholder="Email kamu" className="p-2 w-full text-xs outline-none" />
            <button className="bg-gray-50 px-3 border-l border-gray-300 hover:bg-gray-100 transition-colors">
              ➔
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 border-t border-gray-100 pt-6">
        © 2026 jobApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
