import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen overflow-y-scroll w-full bg-slate-950 space-y-2">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
