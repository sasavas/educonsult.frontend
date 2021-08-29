import { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import StatisticsCard from "./StatisticsCard";

const Dashboard = () => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3008/dashboard").then((res) => {
      setCounts(res.data);
    });
  }, []);

  const makeStatisticsCardItem = (counts) => {
    return Object.keys(counts).map((key) => {
      let icon, title;
      if (key === "studentCount") {
        icon = "bi bi-person-badge";
        title = "Öğrenci Sayısı";
      } else if (key === "programCount") {
        icon = "bi bi-award-fill";
        title = "Program Sayısı";
      } else if (key === "schoolCount") {
        icon = "bi bi-building";
        title = "Okul sayısı";
      }
      return { title: title, count: counts[key], icon: icon };
    });
  };

  return (
    <div>
      <h2 style={{ marginBottom: "2rem" }}>Dashboard</h2>
      <Row>
        {makeStatisticsCardItem(counts).map((c) => (
          <StatisticsCard
            key={c.title}
            title={c.title}
            count={c.count}
            iconClass={c.icon}
          />
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
