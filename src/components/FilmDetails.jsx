import { Play, Star } from "lucide-react";
import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";
import Button from "../ui/Button";

function FilmDetails({ type }) {
  const styles = {
    vertical: ` flex flex-col gap-4`,
  };

  return (
    <div className={styles[type]}>
      <Heading type="normal">The Shawshank Redemption</Heading>
      <p className="text-slate-200 text-sm">
        A wrongfully convicted banker forms a close friendship <br /> with a
        hardened convict over a quarter century <br /> while retaining his
        humanity through simple acts of compassion.
      </p>
      <Wrapper>
        <span className="text-gray-400 font-semibold">Genre</span>
        <span className="text-white">: Drama</span>
      </Wrapper>
      <Wrapper>
        <span className="text-gray-400 font-semibold">Year</span>
        <span className="text-white">: 1994</span>
      </Wrapper>
      <Wrapper>
        <span className="text-gray-400 font-semibold">Rating :</span>
        <span className="flex">
          <Star className="fill-amber-300" />
          <Star className="fill-amber-300" />
          <Star className="fill-amber-300" />
          <Star className="fill-amber-300" />
        </span>
      </Wrapper>
      <Button type="primary">
        <Play />
        <p>Watch Trailer</p>
      </Button>
    </div>
  );
}

export default FilmDetails;
