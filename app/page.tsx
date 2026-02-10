import Hero from "@/components/hero";
import Services from "@/components/services";
import Standard from "@/components/standard";
import Team from "@/components/team";
import Insights from "@/components/insights";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="standard">
        <Standard />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="insights">
        <Insights />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
