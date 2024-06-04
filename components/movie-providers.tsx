import { getProviders } from "../apis";

interface IMovieProvidersProps {
  id: string;
}

export default async function MovieProviders({ id }: IMovieProvidersProps) {
  const providers = await getProviders(id);
  return (
    <div>
      <h1>Providers</h1>
      {JSON.stringify(providers)}
    </div>
  );
}
