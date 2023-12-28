import React from "react";
import RecommendationsDisplay from "./RecommendationsDisplay";

function RecommendationsDisplayBox({ entries }) {
  return (
    <div className=" bg-violet-300 flex flex-col mx-5">
      <h2 className="text-xl text-center font-bold">
        View all recommendations
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <RecommendationsDisplay entries={entries} />
      </div>
    </div>
  );
}

export default RecommendationsDisplayBox;
