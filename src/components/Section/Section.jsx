import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(endpoint);
      setData(res.data);
    };

    fetchData();
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <p onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Show All" : "Collapse"}
        </p>
      </div>

      {isCollapsed ? (
        <Carousel
          data={data}
          renderComponent={(item) => <Card data={item} />}
        />
      ) : (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;