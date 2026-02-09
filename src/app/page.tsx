import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Footer />
    </main>
  );
}
