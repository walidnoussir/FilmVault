import { Heading, Play, X } from "lucide-react";
import Wrapper from "../ui/Wrapper";
import Button from "../ui/Button";
import { useState } from "react";
import Trailer from "./Trailer";
import Modal from "../ui/Modal";

function MovieDetails({ movie, setIsOpenDetails, vertical }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (vertical)
    return (
      <div className="flex flex-col gap-4 justify-between h-full">
        <Heading type="normal">{movie.title}</Heading>
        <p className="text-slate-200 text-sm">{movie.description}</p>
        <Wrapper>
          <span className="text-gray-400 font-semibold">Genre</span>
          <span className="text-white">: {movie.genre}</span>
        </Wrapper>
        <Wrapper>
          <span className="text-gray-400 font-semibold">Year</span>
          <span className="text-white">: {movie.year}</span>
        </Wrapper>
        <Wrapper>
          <span className="text-gray-400 font-semibold">Rating :</span>
          <span className="flex">{"⭐".repeat(movie.rating)}</span>
        </Wrapper>
        <Button type="primary" onClick={() => setShowTrailer(true)}>
          <Play />
          <p>Watch Trailer</p>
        </Button>

        {showTrailer && (
          <Modal>
            <Trailer setShowTrailer={setShowTrailer} movie={movie} />
          </Modal>
        )}
      </div>
    );

  return (
    <div className="bg-slate-800 w-full lg:w-[60%] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden m-1.5 rounded-2xl relative space-y-2">
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
        <Button type="secondary" onClick={() => setShowTrailer(true)}>
          <Play />
          <p>Watch Trailer</p>
        </Button>
      </div>

      {showTrailer && (
        <Modal>
          <Trailer setShowTrailer={setShowTrailer} movie={movie} />
        </Modal>
      )}
    </div>
  );
}

export default MovieDetails;
