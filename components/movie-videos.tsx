import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`'fetch videos:' ${Date.now()}`);
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const response = await fetch(`${API_URL}/${id}/videos`);
  throw new Error("error");
  //   const json = response.json();
  //   return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
