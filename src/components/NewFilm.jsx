import { Plus, X } from "lucide-react";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { useState } from "react";

function NewFilm({ setIsOpen }) {
  const [title, setTilte] = useState("");
  const [description, setDescritpion] = useState("");
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [rating, setRating] = useState(0);

  const [movies, setMovies] = useState(
    () => JSON.parse(localStorage.getItem("movies")) || [],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !year ||
      !genre ||
      !director ||
      !actors ||
      !image ||
      !trailer ||
      !rating
    )
      return;

    const newMovie = {
      id: new Date(),
      title,
      description,
      year,
      genre,
      director,
      actors: actors.split(","),
      image,
      trailer,
      rating,
    };

    const updatedMovies = [...movies, newMovie];

    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    // localStorage.clear;

    setTilte("");
    setDescritpion("");
    setYear(0);
    setGenre("");
    setDirector("");
    setActors("");
    setImage("");
    setTrailer("");
    setRating(0);
  };

  return (
    <form
      className="bg-slate-900 w-[90%] h-[80%] rounded-2xl md:w-[50%] overflow-y-scroll overscroll-none space-y-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between bg-slate-800 text-white p-2 rounded-tr-2xl rounded-tl-2xl">
        <p className="font-bold text-2xl">Add New Film</p>
        <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>
      <FormRow label="Title" style="px-4 py-1">
        <input
          required
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          value={title}
          onChange={(e) => setTilte(e.target.value)}
          placeholder="Enter movie title"
        />
      </FormRow>

      <FormRow label="Description" style="px-4 py-1">
        <textarea
          required
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          value={description}
          onChange={(e) => setDescritpion(e.target.value)}
          placeholder="Enter movie description"
        />
      </FormRow>

      <div className="flex justify-between">
        <FormRow label="Release Year" style="px-4 py-1">
          <input
            required
            className="input w-full"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
          />
        </FormRow>
        <FormRow label="Genre" style="px-4 py-1">
          <input
            required
            className="input placeholder:text-slate-300 placeholder:text-sm w-full"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g., Action, Drama, Sci-Fi"
          />
        </FormRow>
      </div>

      <FormRow label="Director" style="px-4 py-1">
        <input
          required
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          placeholder="Enter director name"
        />
      </FormRow>

      <FormRow label="Actors (comma separated)" style="px-4 py-1">
        <input
          required
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
          placeholder="e.g., Actor One, Actor Two, Actor Three"
        />
      </FormRow>
      <FormRow label="Image URL" style="px-4 py-1">
        <input
          required
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/movie-poster.jpg"
        />
      </FormRow>
      <FormRow label="Trailer URL" style="px-4 py-1">
        <input
          required
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          placeholder="https://youtube.com/watch?v=..."
        />
      </FormRow>
      <FormRow label="Raiting: 5⭐" style="px-4 py-1">
        <input
          required
          className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
          type="range"
          min="1"
          max="5"
          step="1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="https://youtube.com/watch?v=..."
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </FormRow>
      <div className="p-4">
        <Button type="secondary">
          <Plus />
          <p>Add New Film</p>
        </Button>
      </div>
    </form>
  );
}

export default NewFilm;
