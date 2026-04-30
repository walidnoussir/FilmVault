import FilterMovies from "./FilterMovies";
import MovieCard from "./MovieCard";

function MovieLists() {
  const data = JSON.parse(localStorage.getItem("movies")) || [];
  console.log(data);

  return (
    <div className="px-2 space-y-2">
      <h1 className="text-2xl text-white font-bold">All Movies</h1>
      <FilterMovies />
      <div className="grid px-4 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieLists;
