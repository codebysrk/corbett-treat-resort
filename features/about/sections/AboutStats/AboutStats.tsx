import { Counter } from "@/components";
import "./AboutStats.css";

const STATS = [
  { label: "Guests Served", value: "5.0k+" },
  { label: "Team Members", value: "50+" },
  { label: "Rooms", value: "24+" },
  { label: "Customer Satisfaction", value: "99%" },
];

export default function AboutStats() {
  return (
    <section className="about-stats">
      <div className="about-stats-container">
        {STATS.map((stat) => (
          <div key={stat.label} className="about-stat-item">
            <span className="about-stat-label">{stat.label}</span>
            <span className="about-stat-value">
              <Counter value={stat.value} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
