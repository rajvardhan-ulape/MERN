import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import AdmissionDialog from "./components/AdmissionDialog";
import ApplyPage from "./pages/ApplyPage";

// Department pages
import ComputerScience from "./pages/departments/ComputerScience";
import Mechanical from "./pages/departments/Mechanical";
import Electrical from "./pages/departments/Electrical";
import Chemical from "./pages/departments/Chemical";
import Civil from "./pages/departments/Civil";
import Architecture from "./pages/departments/Architecture";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
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
        <Route path="/apply" element={<ApplyPage />} />

        {/* Department Routes */}
        <Route path="/departments/computer-science" element={<ComputerScience />} />
        <Route path="/departments/mechanical" element={<Mechanical />} />
        <Route path="/departments/electrical" element={<Electrical />} />
        <Route path="/departments/chemical" element={<Chemical />} />
        <Route path="/departments/civil" element={<Civil />} />
        <Route path="/departments/architecture" element={<Architecture />} />
      </Routes>

      <Footer />
      <AdmissionDialog />
    </Router>
  );
}

export default App;
