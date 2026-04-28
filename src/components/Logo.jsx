import { Film } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-1.5 cursor-pointer">
      <Film className="text-blue-700" />
      <p className="text-blue-800 font-bold">FilmVault</p>
    </div>
  );
}

export default Logo;
