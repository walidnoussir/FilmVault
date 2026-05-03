import { Play } from "lucide-react";
import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";
import Button from "../ui/Button";

function FilmDetails({ type, movie }) {
  const styles = {
    vertical: ` flex flex-col gap-4`,
  };

  return (
    <div className={styles[type]}>
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
      <Button type="primary">
        <Play />
        <p>Watch Trailer</p>
      </Button>
    </div>
  );
}

export default FilmDetails;
