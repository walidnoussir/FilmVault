import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewFilm from "./components/NewFilm";
import TopMovies from "./components/TopMovies";
import Modal from "./ui/Modal";
import MovieLists from "./components/MovieLists";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll w-full bg-slate-950 space-y-2">
      <Navbar setIsOpen={setIsOpen} />
      <Hero />
      <TopMovies />
      <MovieLists />
      {isOpen && (
        <Modal>
          <NewFilm isOpen={isOpen} setIsOpen={setIsOpen} />
        </Modal>
      )}
    </div>
  );
}

export default App;
