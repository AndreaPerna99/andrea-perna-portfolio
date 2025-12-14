import bachelorDegree from "../../assets/bachelor.jpg";
import leonardoLabs from "../../assets/leonardolabs.jpg";
import venice from "../../assets/venice.jpg";
import InriaRennes from "../../assets/rennes.jpg";
import masterDegree from "../../assets/master.jpg";

import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  const items = [
    {
      img: leonardoLabs,
      alt: "Leonardo Labs",
      caption: "🛰️ Leonardo Labs – 2025",
    },
    {
      img: masterDegree,
      alt: "Outdoor handstand",
      caption: "🎓 Master's Degree - 2025",
    },
    {
      img: InriaRennes,
      alt: "Outdoor handstand",
      caption: "🚀 Inria/IRISA - 2025",
    },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          📸 Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(({ img, alt, caption }, index) => (
            <RevealOnScroll key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={alt}
                  className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-400 text-sm">{caption}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
