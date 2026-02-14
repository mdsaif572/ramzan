import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Calendar = dynamic(() => import('@/components/Calendar'), { ssr: true });
const Duas = dynamic(() => import('@/components/Duas'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const BackToTop = dynamic(() => import('@/components/BackToTop'));

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
