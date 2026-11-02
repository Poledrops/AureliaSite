import type { Feature } from "@/lib/content";

type FeatureGridProps = {
  features: readonly Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <ul className="feature-grid">
      {features.map((feature) => (
        <li key={feature.title} className="feature">
          <h3>{feature.title}</h3>
          <p>{feature.body}</p>
        </li>
      ))}
    </ul>
  );
}
