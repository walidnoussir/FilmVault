function MovieCard({ movie }) {
  return (
    <div className="bg-slate-800 rounded-lg h-fit space-y-1.5 pb-2.5">
      <div className="w-full h-40 relative rounded-tr-lg rounded-tl-lg overflow-hidden">
        <img
          className="w-full h-full object-center rounded-tr-lg rounded-tl-lg hover:scale-110 cursor-pointer duration-150"
          src={movie.image}
          alt="movie-image"
        />
      </div>
      <h1 className="text-white font-bold px-4">{movie.title}</h1>
      <h3 className="text-slate-300 px-4">{movie.genre}</h3>
      <p>
        <span className="text-gray-400 px-4">Rating : </span>{" "}
        {"⭐".repeat(movie.rating)}
      </p>
    </div>
  );
}

export default MovieCard;
