import  React, { useEffect, useState } from "react";
import RecommendationsFilterBox from "./RecommendationsFilterBox";
import RecommendationsDisplayBox from "./RecommendationsDisplayBox";
import NewEntriesForm from "./NewEntriesForm";
import { baseUrl } from "../config";

function MainContainer() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      const response = await fetch(`${baseUrl}/entries`);
      const data = await response.json();
      setEntries(data);
      console.log("data -->", data);
    };
    retrieveData();
  }, []);
  return (
    <div>
      <NewEntriesForm entries={entries} setEntries={setEntries} />
      <RecommendationsFilterBox />
      <RecommendationsDisplayBox entries={entries} />
    </div>
  );
}

export default MainContainer;
