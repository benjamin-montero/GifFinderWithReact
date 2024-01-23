import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { listGifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading ? (
        <h2>Cargando Gifs</h2>
      ) : (
        <div className="card-grid">
          {listGifs.map((gif) => (
            <GifGridItem key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </>
  );
};
