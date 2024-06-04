import { getVideos } from "../apis";
import styles from "../styles/movie-videos.module.css";

interface IMovieVideos {
  id: string;
}

export default async function MovieVideos({ id }: IMovieVideos) {
  const videos = await getVideos(id);
  const top4 = videos.slice(0, 4);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Videos</div>
      <div className={styles.grid}>
        {top4.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture"
            title={video.name}
          />
        ))}
      </div>
    </div>
  );
}
