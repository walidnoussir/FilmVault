import { X } from "lucide-react";
import Wrapper from "../ui/Wrapper";

function MovieDetails({ movie, setIsOpenDetails }) {
  return (
    <div className="bg-slate-800 w-full lg:w-[60%] overflow-y-scroll m-1.5 rounded-2xl relative space-y-2">
      <button
        className="cursor-pointer absolute right-1 bg-slate-900/80 rounded-full p-1"
        onClick={() => setIsOpenDetails(false)}
      >
        <X className="text-white" />
      </button>
      <img
        className="w-full object-center h-75"
        src={movie.image}
        alt="movie-image"
      />
      <div className="py-2 px-4 space-y-1.5">
        <h1 className="text-xl text-white">{movie.title}</h1>
        <span>{"⭐".repeat(movie.rating)}</span>
        <p className="text-gray-200 w-170">{movie.description}</p>
        <div className="grid md:grid-cols-2 gap-2">
          <Wrapper style="space-x-5">
            <span className="text-gray-400 font-semibold">Year</span>
            <span className="text-white">: {movie.year}</span>
          </Wrapper>
          <Wrapper style="space-x-5">
            <span className="text-gray-400 font-semibold">Genre</span>
            <span className="text-white">: {movie.genre}</span>
          </Wrapper>
          <Wrapper style="space-x-5">
            <span className="text-gray-400 font-semibold">Director</span>
            <span className="text-white">: {movie.director}</span>
          </Wrapper>
          <Wrapper style="space-x-5">
            <span className="text-gray-400 font-semibold">Acrors</span>
            <span className="text-white">: {movie.actors.join(", ")}</span>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
