import { storyTags, storyText } from "@/lib/content";

export function Story() {
  return (
    <div className="story">
      <p className="story-text">{storyText}</p>
      <ul className="story-tags">
        {storyTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
