function RecommendationsDisplay({ entries }) {

  if (!entries.length) {
    return "Loading ...";
  }

  return entries.map((entry) => {
    return (
      <div>
        <p>{entry.recommended_by.join(", ")} made the following recommendation(s):</p>
        <p>Title- {entry.title}</p>
        <p>Medium- {entry.medium_type}</p>
        <p>Mood(s)- {entry.mood_types.join(", ")}</p>
      </div>
    );
  });
}

export default RecommendationsDisplay;
