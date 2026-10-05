import { RevealOnScroll } from "../RevealOnScroll";
import { navLinks } from "../navLinks";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Andrea Perna
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm an Italian automation engineer with a strong foundation in robotics
            and a passion for building intelligent systems. I love turning complex
            ideas into real, working solutions, always guided by the motto{" "}
            <em>Keep The Gradient</em>. I'm a Ph.D. researcher in the <em>Rainbow</em>{" "}
            team at IRISA/CNRS in Rennes, France, working on the coordination and
            control of multi-robot systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
