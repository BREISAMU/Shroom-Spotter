import api from "../api";
import { useEffect, useState } from 'react'

export default function ResultsPage () {
    const [identifications, setIdentifications] = useState([]);

    const fetchIdentifications = async () => {
        const response = await api.get("identifications");
        setIdentifications(response.data);
      };

    useEffect(() => {
        fetchIdentifications();
    }, []);

    fetchIdentifications();

    return (
        <div>
            <h1>Results</h1>
            <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Similarity Score</th>
              <th>Most Similar</th>
            </tr>
          </thead>
          <tbody>
            {identifications.map((identification) => (
              <tr key={identification.id}>
                <td>{identification.similarity_score}</td>
                <td>{identification.most_similar}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}