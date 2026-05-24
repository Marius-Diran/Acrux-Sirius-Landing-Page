import Navbar from "./layout/Navbar";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
