import { Trophy } from "lucide-react";
import MovieCard from "./MovieCard";

function TopMovies() {
  const data = JSON.parse(localStorage.getItem("movies")) || [];

  const topMovies = data.sort((a, b) => Number(b.rating) - Number(a.rating));
  console.log(topMovies);

  return (
    <>
      <h1 className="text-white flex items-center gap-2 py-2 px-4">
        <Trophy className="text-amber-300" />
        <p className="text-3xl font-bold">Top Rated Movies</p>
      </h1>
      <div className="grid md:grid-cols-3 gap-4 px-6 py-2">
        {topMovies.slice(0, 3).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default TopMovies;
