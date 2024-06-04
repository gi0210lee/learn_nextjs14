import { getSimilar } from "../apis";

interface IMovieSimilarProps {
  id: string;
}

export default async function MovieSimilar({ id }: IMovieSimilarProps) {
  const similar = await getSimilar(id);

  return (
    <div>
      <h1>Similar</h1>
      {JSON.stringify(similar)}
    </div>
  );
}
