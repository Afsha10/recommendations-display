import React from "react";
import FilterDropDown from "./FilterDropDown";

function RecommendationsFilterBox({ media, setMedia }) {
  return (
    <div>
      <h2 className="text-xl text-center font-bold my-2">
        Filter your recommendations by...
      </h2>
      <div className="md:grid grid-cols-3 bg-fuchsia-900 p-6 text-white m-5">
        <FilterDropDown
          type="medium"
          values={["All media", "Books", "Movies/Films", "Events", "Music"]}
        />
        <FilterDropDown
          type="mood"
          values={["All moods", "Happy", "Sad", "Inspiration", "Whimsical"]}
        />
        {/* How do we fix formatting */}
        <FilterDropDown
          type="recommender"
          values={[
            "Everyone's recommendations",
            "CathyRose",
            "LorentzTulip",
            "AlexeyOrchid",
            "AlishaJasmine",
            "DanielLily",
          ]}
        />
      </div>
    </div>
  );
}

export default RecommendationsFilterBox;
