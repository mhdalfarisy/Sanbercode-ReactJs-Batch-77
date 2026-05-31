import React from 'react';

const Cta = () => {
  return (
    <section className="bg-indigo-50/60 py-12 px-6 md:px-12 text-center md:text-left border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Siap memulai karirmu sekarang?
          </h3>
          <p className="text-sm text-gray-500">
            Buat akun gratis dan temukan peluang terbaik untukmu.
          </p>
        </div>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg flex items-center shadow-md transition duration-200">
            Daftar Sekarang <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
