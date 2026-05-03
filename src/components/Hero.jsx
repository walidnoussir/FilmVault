import FilmImage from "../ui/FilmImage";
import MovieDetails from "./MovieDetails";

function Hero() {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  const topMovie = movies
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .at(0);
  console.log(topMovie);

  return (
    <div className="px-2 flex gap-2 flex-col md:flex-row">
      <FilmImage type="top" src={topMovie.image} />
      <MovieDetails movie={topMovie} vertical />
    </div>
  );
}

export default Hero;
