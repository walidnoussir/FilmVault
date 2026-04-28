import FilmImage from "../ui/FilmImage";
import FilmDetails from "./FilmDetails";

function Hero() {
  return (
    <div className="px-2 flex gap-2 flex-col md:flex-row">
      <FilmImage type="top" src="../../public/shawshank.jpg" />
      <FilmDetails type="vertical" />
    </div>
  );
}

export default Hero;
