import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCarousel from "./components/CategoryCarousel";
import ValueProposition from "./components/ValueProposition";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategoryCarousel />
        <ValueProposition />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
