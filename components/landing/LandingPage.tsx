import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#080D20]">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
