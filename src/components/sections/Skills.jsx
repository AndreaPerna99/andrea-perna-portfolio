import { RevealOnScroll } from "../RevealOnScroll";

const skillGroups = [
  {
    title: "Robotics",
    skills: ["ROS2", "Arduino", "PX4", "VXWorks", "PCB", "LabVIEW", "MATLAB", "Simulink", "Docker", "Git", "20Sim", "Raspberry Pi"],
  },
  {
    title: "Artificial Intelligence",
    skills: ["Sklearn", "TensorFlow", "PyTorch", "Pandas", "OpenCV", "Numpy"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Java", "C++/C#", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Game Development & Visualization",
    skills: ["Unity", "Unreal Engine", "Blender", "Manim", "Matplotlib"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            🛠️ Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map(({ title, skills }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((tech) => (
                    <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
