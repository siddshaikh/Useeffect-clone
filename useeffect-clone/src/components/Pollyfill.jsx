import React, { useEffect, useState } from "react";

const Pollyfill = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((items) => (
        <li>{items.title}</li>
      ))}
    </div>
  );
};

export default Pollyfill;
