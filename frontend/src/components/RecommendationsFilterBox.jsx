import React from "react";

function RecommendationsFilterBox({ media, setMedia }) {
  return (
    <div>
      <h2 className="text-xl text-center font-bold my-2">
        Filter your recommendations by...
      </h2>
      <div className="md:flex flex-row bg-lime-300 p-6">
        <div className="bg-white w-1/3">
          <label for="medium">Choose a medium:</label>
          <select id="medium" name="medium">
            <option value="books">Books</option>
            <option value="movies/films">Movies/Films</option>
            <option value="events">Events</option>
            <option value="music">Music</option>
          </select>
        </div>
        <div className="bg-lime w-1/3">
          <label for="mood">Choose a mood:</label>
          <select id="mood" name="mood">
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="inspirational">Inspirational</option>
            <option value="whimsical">Whimsical</option>
          </select>
        </div>
        <div className="bg-white w-1/3">
          <label for="recommendedBy">Choose someone who recommended:</label>
          <select id="recommendedBy" name="recommendedBy">
            <option value="cathyRose">Cathy Rose</option>
            <option value="lorentzTulip">Lorentz Tulip</option>
            <option value="alexeyOrchid">Alexey Orchid</option>
            <option value="alishaJasmine">Alisha Jasmine</option>
            <option value="danielLily">Daniel Lily</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsFilterBox;
