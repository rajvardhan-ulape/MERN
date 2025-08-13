import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Stats from "./components/Stats";
import Programs from "./components/Programs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      {/* Later add Placements, CampusLife, NewsEvents, Footer */}
    </>
  );
}

export default App;
