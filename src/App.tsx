import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        overflow-x-hidden
      "
    >

      <Navbar />

      <main>
        <About />
      </main>

    </div>
  );
}

export default App;