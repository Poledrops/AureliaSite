import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <div className="container">
      <ul className="stats">
        {stats.map((stat) => (
          <li key={stat.label} className="stat">
            <span className="stat-value gold-text">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
