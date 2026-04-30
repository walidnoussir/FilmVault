// import Select from "../ui/Select";

function FilterMovies({ movies, genre, setGenre, rate, setRate }) {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
      <div className="py-3 w-full px-4 bg-slate-800 rounded-lg space-y-2">
        <h2 className="text-gray-400">Filter by genre</h2>
        <select
          id="id-04"
          name="id-04"
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="peer w-full relative h-10 appearance-none rounded border border-slate-200 bg-slate-700 px-4 text-sm text-slate-200 outline-none transition-all autofill:bg-slate-400 focus:border-slate-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-200"
        >
          <option value="all">All</option>

          {[...new Set(movies.map((movie) => movie.genre))].map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="py-3 w-full px-4 bg-slate-800 rounded-lg space-y-2">
        <h2 className="text-gray-400">Minimum Rating : ⭐</h2>
        <input
          className="w-full h-3 bg-gray-900 rounded-lg appearance-none cursor-pointer accent-blue-600"
          type="range"
          min="1"
          max="5"
          step="1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="https://youtube.com/watch?v=..."
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
}

export default FilterMovies;
