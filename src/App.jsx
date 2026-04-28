import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewFilm from "./components/NewFilm";
import Modal from "./ui/Modal";

function App() {
  return (
    <div className="h-screen overflow-y-scroll w-full bg-slate-950 space-y-2">
      <Navbar />
      <Hero />
      <Modal>
        <NewFilm />
      </Modal>
    </div>
  );
}

export default App;
