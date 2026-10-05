import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📬 Contact
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            📧 Personal Email: <a href="mailto:and.perna99@gmail.com" className="text-blue-400 hover:underline">and.perna99@gmail.com</a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📧 Professional Email: <a href="mailto:andrea.perna@irisa.fr" className="text-blue-400 hover:underline">andrea.perna@irisa.fr</a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📞 Mobile Phone: <a href="tel:+393801093879" className="text-blue-400 hover:underline">+39 3801093879</a>
          </p>
          <p className="text-gray-300 text-lg mb-4 break-words">
            💼 LinkedIn: <a href="https://www.linkedin.com/in/andrea-perna-4aa6191b1/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://www.linkedin.com/in/andrea-perna-4aa6191b1/</a>
          </p>
          <p className="text-gray-300 text-lg">
            🌍 Location: Rennes, France
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
