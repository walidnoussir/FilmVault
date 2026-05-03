import { useState } from "react";
import FilterMovies from "./FilterMovies";
import MovieCard from "./MovieCard";

function MovieLists() {
  const [genre, setGenre] = useState("all");
  const [rate, setRate] = useState(0);
  console.log(genre);

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  const filtredMovies = movies.filter((movie) => {
    const byGenre = genre === "all" || movie.genre === genre;
    const byRate = rate
      ? Number(movie.rating) == rate
      : Number(movie.rating) >= 0;
    return byGenre && byRate;
  });

  return (
    <div className="px-2 space-y-2">
      <h1 className="text-2xl text-white font-bold">All Movies</h1>
      <FilterMovies
        genre={genre}
        setGenre={setGenre}
        movies={movies}
        rate={rate}
        setRate={setRate}
      />
      <div className="grid px-4 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        {filtredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieLists;
