import { getSimilar } from "../apis";
import styles from "../styles/movie-similar.module.css";

interface IMovieSimilarProps {
  id: string;
}

export default async function MovieSimilar({ id }: IMovieSimilarProps) {
  const similars = await getSimilar(id);
  const top4 = similars.slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Similar</div>
      <div className={styles.grid}>
        {top4.map((similar) => (
          <div className={styles.grid_item} key={similar.id}>
            <img
              className={styles.poster}
              src={similar.poster_path}
              alt={similar.title}
            />
            <div>{similar.title}</div>
            <div className={styles.name}>⭐{similar.vote_average}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
