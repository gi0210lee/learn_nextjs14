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
  const json = response.json();
  return json;
}

export async function getCredits(id: string) {
  console.log(`'fetch credits:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = response.json();
  return json;
}

export async function getProviders(id: string) {
  console.log(`'fetch providers:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/providers`);
  const json = response.json();
  return json;
}

export async function getSimilar(id: string) {
  console.log(`'fetch similar:' ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/similar`);
  const json = response.json();
  return json;
}
