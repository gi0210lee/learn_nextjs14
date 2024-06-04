import styles from "../styles/home.module.css";
import Movie from "../components/movie";
import { getMovies } from "../apis";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
