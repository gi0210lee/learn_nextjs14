import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import LoadingBar from "../../../../components/loading-bar";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Move Detail Page</h3>
      <Suspense fallback={<LoadingBar />}>
        <MovieInfo id={id} />
      </Suspense>
      <h3>Videos</h3>
      <Suspense fallback={<LoadingBar />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
