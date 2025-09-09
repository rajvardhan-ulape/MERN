import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import AdmissionDialog from "./components/AdmissionDialog"; // ✅ import

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Footer />
      <AdmissionDialog />  {/* ✅ show popup on load */}
    </div>
  );
}

export default App;
