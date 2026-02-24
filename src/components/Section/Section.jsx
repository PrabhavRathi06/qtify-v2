import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(endpoint);
      setData(res.data);
    };

    fetchData();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>Collapse</p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Section;
