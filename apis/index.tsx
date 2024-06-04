const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  return json;
}

export async function getMovie(id: string) {
  console.log(`'fetch movie:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  const json = response.json();
  return json;
}

export async function getVideos(id: string) {
  console.log(`'fetch videos:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/videos`);
  // throw new Error("error");
  const json = response.json();
  return json;
}

export async function getCredits(id: string) {
  console.log(`'fetch credits:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/credits`);
  // throw new Error("error");
  const json = response.json();
  return json;
}

export async function getProviders(id: string) {
  console.log(`'fetch providers:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/providers`);
  // throw new Error("error");
  const json = response.json();
  return json;
}

export async function getSimilar(id: string) {
  console.log(`'fetch similar:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/similar`);
  // throw new Error("error");
  const json = response.json();
  return json;
}
