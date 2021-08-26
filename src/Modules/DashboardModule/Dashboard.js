import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3008/dashboard").then((res) => {
      setCounts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {Object.keys(counts).map((key) => (
        <p>
          {key} {counts[key]}
        </p>
      ))}
    </div>
  );
};

export default Dashboard;
