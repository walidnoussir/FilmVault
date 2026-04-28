import { X } from "lucide-react";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";

function NewFilm() {
  return (
    <form className="bg-slate-900 w-[90%] h-[80%] rounded-2xl md:w-[50%] overflow-y-scroll overscroll-none space-y-2 pb-4">
      <div className="flex items-center justify-between bg-slate-800 text-white p-2 rounded-tr-2xl rounded-tl-2xl">
        <p className="font-bold text-2xl">Add New Film</p>
        <X />
      </div>
      <FormRow label="Title" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="Enter movie title"
        />
      </FormRow>
      <FormRow label="Description" style="px-4 py-1">
        <textarea
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="Enter movie description"
        />
      </FormRow>
      <div className="flex justify-between">
        <FormRow label="Release Year" style="px-4 py-1">
          <input className="input w-full" type="number" />
        </FormRow>
        <FormRow label="Genre" style="px-4 py-1">
          <input
            className="input placeholder:text-slate-300 placeholder:text-sm w-full"
            type="text"
            placeholder="e.g., Action, Drama, Sci-Fi"
          />
        </FormRow>
      </div>

      <FormRow label="Director" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="Enter director name"
        />
      </FormRow>
      <FormRow label="Actors (comma separated)" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="Enter director name"
        />
      </FormRow>
      <FormRow label="Actors (comma separated)" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="Enter director name"
        />
      </FormRow>
      <FormRow label="Actors (comma separated)" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="e.g., Actor One, Actor Two, Actor Three"
        />
      </FormRow>
      <FormRow label="Image URL" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="https://example.com/movie-poster.jpg"
        />
      </FormRow>
      <FormRow label="Trailer URL" style="px-4 py-1">
        <input
          className="input placeholder:text-slate-300 placeholder:text-sm"
          type="text"
          placeholder="https://youtube.com/watch?v=..."
        />
      </FormRow>
      <FormRow label="Raiting: 5⭐" style="px-4 py-1">
        <input
          className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
          type="range"
          min="1"
          max="5"
          step="1"
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
      <Button type="secondary">Add New Film</Button>
    </form>
  );
}

export default NewFilm;
