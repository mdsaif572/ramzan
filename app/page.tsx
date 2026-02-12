import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Calendar from "@/components/Calendar";
import Duas from "@/components/Duas";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Calendar />
      <Duas />
      <Footer />
      <BackToTop />
    </main>
  );
}
