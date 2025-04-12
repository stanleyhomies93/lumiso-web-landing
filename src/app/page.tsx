import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumiso | Innovative Software Development Agency",
  description: "Build exceptional digital products with Lumiso. We create custom software solutions that transform ideas into powerful, user-friendly applications.",
  openGraph: {
    title: "Lumiso | Innovative Software Development Agency",
    description: "Build exceptional digital products with Lumiso. We create custom software solutions that transform ideas into powerful, user-friendly applications.",
    type: "website",
    locale: "en_US",
    url: "https://lumiso.example.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
