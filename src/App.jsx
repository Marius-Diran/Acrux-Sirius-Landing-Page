import Header from "./pages/Header.jsx";
import Hero from "./pages/Hero.jsx";
import Ecosystem from "./pages/Ecosystem.jsx";
import Founder from "./pages/Founder.jsx";
import Stats from "./pages/Stats.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import CTA from "./pages/CTA.jsx";
import Footer from "./pages/Footer.jsx";
import StarField from "./components/StarField";

const App = () => {
  return (
    <div className="site-shell">
      <StarField />

      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Founder />
        <Stats />
        <Services />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
