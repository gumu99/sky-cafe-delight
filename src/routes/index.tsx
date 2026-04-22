import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Hours } from "@/components/site/Hours";
import { FindUs } from "@/components/site/FindUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONESKY Cafe — Rooftop Coffee in Ashoknagar, West Bengal" },
      {
        name: "description",
        content:
          "ONESKY is an open-sky rooftop cafe on Jirat Road, Ashoknagar. Warm fairy lights, peaceful evenings, and great coffee — open daily 2 PM to 10:30 PM.",
      },
      { property: "og:title", content: "ONESKY Cafe — Where the sky meets your coffee" },
      {
        property: "og:description",
        content:
          "An open-sky rooftop cafe in Ashoknagar, West Bengal. Cozy, warm, and lit by the stars.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Hours />
      <FindUs />
      <Contact />
      <Footer />
    </main>
  );
}
