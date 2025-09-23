import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import AdmissionDialog from "./components/AdmissionDialog";

// Pages
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import ApplyPage from "./pages/ApplyPage";

// Department pages
import ComputerScience from "./pages/departments/ComputerScience";
import Mechanical from "./pages/departments/Mechanical";
import Electrical from "./pages/departments/Electrical";
import Civil from "./pages/departments/Civil";
import Chemical from "./pages/departments/Chemical";
import Architecture from "./pages/departments/Architecture";

function App() {
  return (
    <Router>
      <Navbar />
      <AdmissionDialog />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Programs />
            </>
          }
        />

        {/* Navbar Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply" element={<ApplyPage />} />

        {/* Department Pages */}
        <Route path="/departments/computer-science" element={<ComputerScience />} />
        <Route path="/departments/mechanical" element={<Mechanical />} />
        <Route path="/departments/electrical" element={<Electrical />} />
        <Route path="/departments/civil" element={<Civil />} />
        <Route path="/departments/chemical" element={<Chemical />} />
        <Route path="/departments/architecture" element={<Architecture />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
