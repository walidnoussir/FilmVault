import { X } from "lucide-react";

function Trailer({ movie, setShowTrailer }) {
  const getEmbedUrl = (url) => {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=1`
      : null;
  };

  const embedUrl = getEmbedUrl(movie.trailer);
  return (
    <div className="h-[50%] md:h-[95%] w-[90%] md:w-[70%] flex flex-col">
      <button
        className="cursor-pointer absolute bg-slate-900/80 rounded-full p-1"
        onClick={() => setShowTrailer(false)}
      >
        <X className="text-white" />
      </button>
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title="Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Trailer;
