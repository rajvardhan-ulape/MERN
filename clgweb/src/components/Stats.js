import React from "react";
import "./Stats.css";

export default function Stats() {
  const stats = [
    { label: "Recruiters", value: "200+" },
    { label: "Programs", value: "25+" },
    { label: "Placement Rate", value: "95%" },
    { label: "Students", value: "5000+" },
  ];

  return (
    <section className="stats">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card">
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
