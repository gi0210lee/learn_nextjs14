import { getVideos } from "../apis";
import styles from "../styles/movie-videos.module.css";

interface IMovieVideos {
  id: string;
}

export default async function MovieVideos({ id }: IMovieVideos) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
