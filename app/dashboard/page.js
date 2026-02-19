"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const API_URL = "https://learning-backend-vxof.onrender.com";
  const userId = "U55";

  useEffect(() => {
    fetch(`${API_URL}/api/dashboard/${userId}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  if (data.message) return <h2>{data.message}</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Dashboard</h1>
      <p>Level: {data.current_level}</p>
      <p>Average Score: {data.average_score}%</p>
      <p>Recommended Topic: {data.recommended_topic}</p>
      <p>Difficulty Adjustment: {data.difficulty_adjustment}</p>
    </div>
  );
}