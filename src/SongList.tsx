import { useEffect, useState } from "react";

// Определяем интерфейс для структуры песни
interface Song {
  id: number;
  title: string;
  artist: string;
}

const SongsList: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/songs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((data: Song[]) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Список песен</h2>
      {songs.length === 0 ? (
        <p>Нет доступных песен</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <strong>{song.title}</strong> - {song.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongsList;
