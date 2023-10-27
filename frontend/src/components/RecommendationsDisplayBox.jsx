import React from "react";
import RecommendationsDisplay from "./RecommendationsDisplay";

function RecommendationsDisplayBox({ entries }) {
  return (
    <div>
      <h2 className="text-xl text-center font-bold">
        View all recommendations
      </h2>
      <RecommendationsDisplay entries={entries} />
    </div>
  );
}

export default RecommendationsDisplayBox;
