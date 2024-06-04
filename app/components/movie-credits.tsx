import { getCredits } from "../apis";
import styles from "../styles/movie-credits.module.css";

interface IMovieCreditsProps {
  id: string;
}

export default async function MovieCredits({ id }: IMovieCreditsProps) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Credits</div>
      <div className={styles.contents}>
        {credits.map((credit) => (
          <div className={styles.info} key={credit.id}>
            <div className={styles.info_left}>
              <img
                className={styles.poster}
                src={credit.profile_path}
                alt={credit.name}
              />
            </div>
            <div className={styles.info_right}>
              <div className={styles.character}>{credit.character}</div>
              <div className={styles.name}>{credit.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
