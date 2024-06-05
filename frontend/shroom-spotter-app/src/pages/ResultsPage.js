import api from "../api";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [identifications, setIdentifications] = useState([]);

  const fetchIdentifications = async () => {
    const response = await api.get("identifications");
    setIdentifications(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchIdentifications();
  }, []);

  const display_results = () => {
    try {
      let ret = (
        <div className="results-container">
          <h2>This mushroom is predicted to be</h2>
          <h1>{identifications[identifications.length - 1]["most_similar"]}</h1>
          <h2>with a similarity score of</h2>
          <h1>
            {Math.round(100 * parseFloat(identifications[identifications.length - 1]["similarity_score"])) / 100}
          </h1>
          <br /><br />
          <h3 className="mt-3">NOTE: It is not recommended that any mushroom is consumed without verifying the identification is accurate.</h3>
        </div>
      );
      return ret;
    } catch {
      console.log(identifications[identifications.length - 1]);
      return <h1>Loading....</h1>;
    }
  };

  return (
    <div className="bg-main organize-center">
      <div className="">{display_results()}</div>
      <div className="filler" />
    </div>
    
  );
}
