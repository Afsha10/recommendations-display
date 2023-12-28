import React, { useState } from "react";
import { baseUrl } from "../config";

function NewEntriesForm({ entries, setEntries }) {
  const [formTitle, setFormTitle] = useState("");
  const [formRecommendedBy, setFormRecommendedBy] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formTitle && formRecommendedBy !== "") {
      const newData = {
        title: formTitle,
        recommendedBy: formRecommendedBy,
      };

      fetch(`${baseUrl}/entries`, {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => {
          if (response.ok) {
            setEntries([...entries, newData]); // We add the new data to the existing entries
            setFormTitle("");
            setFormRecommendedBy("");
            setErrorMessage("");
          } else {
            throw new Error("Error adding a recommendation");
          }
        })
        .catch((error) => {
          console.log("Error adding a recommendation", error);
        });
    } else if (formTitle === "" && formRecommendedBy === "") {
      setErrorMessage("Add a title and a recommender name");
    } else if (formTitle === "") {
      setErrorMessage("Add a title");
    } else {
      setErrorMessage("Add a recommender name");
    }
  };

  return (
    <div className="mx-4">
      <h2 className="text-xl text-center font-bold">
        Add a new recommendation
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter a title"
              required
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="h-8 w-full rounded bg-gray-200 p-2 pl-4 pr-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="url">Recommended By:</label>
            <input
              type="text"
              name="recommendedBy"
              id="recommendedBy"
              placeholder="Enter recommender's full name"
              required
              value={formRecommendedBy}
              onChange={(e) => setFormRecommendedBy(e.target.value)}
              className="h-8 w-full rounded bg-gray-200 p-2 pl-4 pr-4"
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {/* {!errorMessage && entries.length > 0 &&  <p>Recommendation added successfully!</p>} */}
    </div>
  );
}

export default NewEntriesForm;
