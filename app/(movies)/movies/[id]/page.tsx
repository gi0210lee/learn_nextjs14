import { Suspense } from "react";
import LoadingBar from "../../../../components/loading-bar";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../apis";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<LoadingBar />}>
        <MovieInfo id={id} />
      </Suspense>

      {/* <Suspense fallback={<LoadingBar />}>
        <MovieVideos id={id} />
      </Suspense> */}
    </div>
  );
}
