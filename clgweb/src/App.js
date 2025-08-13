import React from "react";
import Hero from "./components/hero";
import Stats from "./components/Stats";
import Programs from "./components/Programs";

function App() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      {/* Later add Placements, CampusLife, NewsEvents, Footer */}
    </>
  );
}

export default App;
