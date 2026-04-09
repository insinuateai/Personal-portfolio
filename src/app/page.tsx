import Background from "@/components/Background";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Products from "@/components/Products";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
            jobTitle: "Founder & Mathematician",
            description: siteConfig.description,
            sameAs: ["https://github.com/insinuateai"],
            knowsAbout: [
              "Artificial Intelligence",
              "Formal Verification",
              "Topology",
              "Multi-Agent Systems",
              "Lean 4",
            ],
          }),
        }}
      />
      <Background />
      <Navigation />
      <main>
        <Hero />
        <Thesis />
        <Products />
        <Research />
        <Contact />
      </main>
    </>
  );
}
