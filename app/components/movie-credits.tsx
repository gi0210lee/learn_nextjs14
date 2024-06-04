import { getCredits } from "../apis";
import styles from "../styles/movie-credits.module.css";

interface IMovieCreditsProps {
  id: string;
}

export default async function MovieCredits({ id }: IMovieCreditsProps) {
  const credits = await getCredits(id);
  const top6 = credits.slice(0, 6);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Credits</div>
      <div className={styles.grid}>
        {top6.map((credit) => (
          <div className={styles.grid_item} key={credit.id}>
            <div className={styles.item_left}>
              <img
                className={styles.poster}
                src={credit.profile_path}
                alt={credit.name}
              />
            </div>
            <div className={styles.item_right}>
              <div className={styles.character}>{credit.character}</div>
              <div className={styles.name}>{credit.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
