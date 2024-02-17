import Nav from "./components/Nav";
import Pricing from "./sections/Pricing";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="">
      <section id="nav" className="w-full z-20">
        <Nav />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;
