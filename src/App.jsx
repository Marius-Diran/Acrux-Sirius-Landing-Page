import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import StarField from "./components/StarField";

const App = () => {
  return (
    <div>
      <StarField />

      <div className="relative z-10">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Hero />
          <About />
        </main>
      </div>
    </div>
  );
};

export default App;
