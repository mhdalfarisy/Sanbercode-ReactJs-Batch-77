// import PostContainer from "./components/PostContainer";
// import DataPeserta from "./components/DataPeserta";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-blue-500 selection:text-white">
      {/* Tugas 4 */}
      {/* <DataPeserta
        name="Rezky Putra"
        email="rezky@example.com"
        alamat="Makassar, Sulawesi Selatan"
      />
      <DataPeserta
        name="Andi Saputra"
        email="andi@example.com"
        alamat="Gowa, Sulawesi Selatan"
      />
      <DataPeserta
        name="Siti Aisyah"
        email="siti@example.com"
        alamat="Maros, Sulawesi Selatan"
      /> */}

      {/* Tugas 5 */}
      {/* <PostContainer /> */}

      {/* Tugas 6 */}
      {/* 1. HEADERS */}
      <Navbar />
      
      <main>
        {/* 2. HERO */}
        <Hero />
        
        {/* 3. ABOUT */}
        <About />
        
        {/* 4. CTA */}
        <Cta />
      </main>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
