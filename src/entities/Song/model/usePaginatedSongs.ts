import { useEffect, useState } from "react";
import { getPaginatedSongs } from "./getSongs";
import { Song } from "../types/Songs";

export const usePaginatedSongs = (page: number, size = 10) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await getPaginatedSongs(page, size);
      setSongs(data.content);
      setTotalPages(data.totalPages);
      setLoading(false);
    };
    fetch();
  }, [page]);

  return { songs, totalPages, loading };
};
