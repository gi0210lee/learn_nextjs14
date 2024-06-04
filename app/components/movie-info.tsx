import { getMovie } from "../apis";
import styles from "../styles/movie-info.module.css";

interface IMovieInfoPros {
  id: string;
}

export default async function MovieInfo({ id }: IMovieInfoPros) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage ➡️
        </a>
      </div>
    </div>
  );
}
