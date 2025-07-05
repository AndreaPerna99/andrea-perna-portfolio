import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const Robotics = ["ROS2", "Arduino", "PX4", "VXWorks", "PCB", "LabVIEW", "MATLAB", "Simulink", "Docker", "Git", "20Sim", "Raspberry Pi"];
  const ArtificialIntelligence = ["Sklearn", "TensorFlow", "PyTorch", "Pandas", "OpenCV", "Numpy"];
  const ProgrammingLanguages = ["Python", "C", "Java", "C++/C#", "JavaScript", "HTML/CSS"];
  const GameDevelopment = ["Unity", "Unreal Engine", "Blender", "Manim", "Matplotlib"];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            🛠️ Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Robotics */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Robotics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Robotics.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Artificial Intelligence</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ArtificialIntelligence.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ProgrammingLanguages.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Game Dev */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Game Development & Visualization</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {GameDevelopment.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
