import React, { useEffect, useState } from "react";
import FilterDropDown from "./FilterDropDown";
import axios from "axios";

function RecommendationsFilterBox() {
  const [media, setMedia] = useState([]);
  const [moods, setMoods] = useState([]);
  // const handleOnchange = () => {};

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(
          "https://recommendations-tracker-backend.onrender.com/media"
        );
        setMedia(
          response.data.map((val) => {
            return val.medium_type;
          })
        );
      } catch (error) {
        console.log("error");
      }
    };
    fetchMedia();
  }, []);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(
          "https://recommendations-tracker-backend.onrender.com/moods"
        );
        setMoods(
          response.data.map((val) => {
            return val.mood_type;
          })
        );
      } catch (error) {
        console.log("error");
      }
    };
    fetchMoods();
  }, []);

  return (
    <div>
      <h2 className="text-xl text-center font-bold my-2">
        Filter your recommendations by...
      </h2>
      <div className="md:grid grid-cols-3 bg-fuchsia-900 p-6 text-white m-5">
        {/* medium filter drop down */}
        <FilterDropDown
          type="media"
          // values={["All media", "Books", "Movies/Films", "Events", "Music"]}
          values={media}
          // handleOnChange={handleOnChange}
        />
        {/* mood filter drop down */}
        <FilterDropDown type="moods" values={moods} />
      </div>
    </div>
  );
}

export default RecommendationsFilterBox;
