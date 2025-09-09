import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import AdmissionDialog from "./components/AdmissionDialog";
import ApplyPage from "./pages/ApplyPage"; // ✅ your form page

function App() {
  return (
    <Router>
      <Navbar />

      {/* Routes define pages */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Programs />
            </>
          }
        />

        {/* Apply form page */}
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>

      <Footer />

      {/* Popup dialog only appears on homepage */}
      <AdmissionDialog />
    </Router>
  );
}

export default App;
