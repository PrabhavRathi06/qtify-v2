import { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

import styles from "./Songs.module.css";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const songsRes = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );

      const genreRes = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );

      setSongs(songsRes.data);
      setGenres(genreRes.data.data);
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredSongs =
    selectedTab === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedTab);

  return (
    <div className={styles.section}>
      <h2>Songs</h2>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="All" value="all" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderComponent={(item) => (
          <Card data={item} isSong={true} />
        )}
      />
    </div>
  );
}

export default Songs;