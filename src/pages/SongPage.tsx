import React, { useEffect } from "react";
import axios from "axios";

const SongPage = () => {
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/songs/52");
        console.log("Song data:", response.data);
      } catch (error) {
        console.error("Failed to fetch song:", error);
      }
    };

    fetchSong();
  }, []);

  return (
    <div>
      <h1>Song Page</h1>
    </div>
  );
};

export default SongPage;
