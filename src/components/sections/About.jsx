import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  // Skills definitions
  const Robotics = ["ROS2", "Arduino", "PX4", "VXWorks", "PCB", "LabVIEW", "MATLAB", "Simulink", "Docker", "Git", "20Sim", "Raspberry Pi",];
  const ArtificialIntelligence = ["Sklearn", "TensorFlow", "PyTorch", "Pandas", "OpenCV", "Numpy",];
  const ProgrammingLanguages = ["Python", "C", "Java", "C++/C#", "JavaScript", "HTML/CSS",];
  const GameDevelopment = ["Unity", "Unreal Engine", "Blender", "Manim", "Matplotlib",];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          👨‍💼 About Me
        </h2>


          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>MSc in Automation Engineering (International)</strong>
                <br />
                <span className="text-sm text-gray-400">University of Bologna, Italy</span>
                <br />
                <span className="text-sm text-gray-400">Expected Graduation: 10/2025</span>
                <br />
                <span className="text-sm text-gray-400">Current GPA: 29.4/30</span>

                <div className="mt-2 pl-4 border-l-2 border-blue-500">
                  <h5 className="text-sm font-semibold text-gray-300 mb-1">Thesis</h5>
                  <p className="text-sm text-gray-400">Real-time LogAnalyzer for autonomous drones</p>
                  <p className="text-sm text-gray-400">
                    <strong>Supervisor:</strong> Prof. Giuseppe Notarstefano
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong>Co-Supervisor:</strong> Dr. Fabrizio Schiano
                  </p>
                </div>
              </li>
                <li>
                  <strong>BSc in Electronic and Computer Engineering</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Ferrara, Italy</span>
                  <br />
                  <span className="text-sm text-gray-400">Graduated: 03/2022</span>
                  <br />
                  <span className="text-sm text-gray-400">Grade: 100</span>
                  
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <h5 className="text-sm font-semibold text-gray-300 mb-1">Thesis</h5>
                    <p className="text-sm text-gray-400">Development of remote control software for a digital microwave oscilloscope</p>
                    <p className="text-sm text-gray-400">
                      <strong>Supervisor:</strong> Prof. Valeria Vadalà
                    </p>
                    <p className="text-sm text-gray-400">
                      <strong>Co-Supervisor:</strong> Dr. Ing. Gianni Bosi
                    </p>
                  </div>
                </li>
                <li>
                  <strong>ITIS Electronics and Telecommunications</strong>
                  <br />
                  <span className="text-sm text-gray-400">Giordano Bruno Bologna, Italy</span>
                  <br />
                  <span className="text-sm text-gray-400">Graduated: 07/2018</span>
                  <br />
                  <span className="text-sm text-gray-400"></span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                  <h5 className="text-sm font-semibold text-gray-300 mb-1">Thesis</h5>
                  <p className="text-sm text-gray-400">Design and Implementation of a Wireless-Controlled RC Car Using Arduino</p>
                </div>
                
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master’s Thesis</strong>
                  <br />
                  <span className="text-sm text-gray-400">Leonardo Labs</span>
                  <br />
                  <span className="text-sm text-gray-400">03/2025 – 09/2025</span>
                  <br />
                  <span className="text-sm text-gray-400">Rome, Italy</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Developed a real-time LogAnalyzer for anomaly detection in autonomous drones, utilizing a hybrid rule-based and ML approach.</li>
                      <li>Engineered a modular Python-based data pipeline for real-time telemetry analysis during flights.</li>
                      <li>Gained experience in PX4, ROS2, Docker, Git, and real-time data processing.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Embedded Systems Engineer</strong>
                  <br />
                  <span className="text-sm text-gray-400">Fuga Impossibile Escape Room</span>
                  <br />
                  <span className="text-sm text-gray-400">08/2024 – 03/2025</span>
                  <br />
                  <span className="text-sm text-gray-400">Bologna, Italy</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Developed an Arduino-based Escape Room with sensor-driven gameplay.</li>
                      <li>Designed custom PCBs for embedded game logic.</li>
                      <li>Integrated sensors and actuators for interactive puzzles.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Mathematics Lecturer</strong>
                  <br />
                  <span className="text-sm text-gray-400">Aldini Valeriani Technical Institute</span>
                  <br />
                  <span className="text-sm text-gray-400">08/2023 – 09/2023</span>
                  <br />
                  <span className="text-sm text-gray-400">Bologna, Italy</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Taught a 60-hour math course for first-year high school students.</li>
                      <li>Fostered student collaboration through problem-solving and puzzles.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Bachelor’s Thesis at ETLab</strong>
                  <br />
                  <span className="text-sm text-gray-400">ETLab, University of Ferrara</span>
                  <br />
                  <span className="text-sm text-gray-400">11/2021 – 03/2022</span>
                  <br />
                  <span className="text-sm text-gray-400">Ferrara, Italy</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Developed remote-control software for a Tektronix microwave oscilloscope using LabVIEW and VISA.</li>
                      <li>Enabled advanced data saving and full-featured remote interaction.</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>


          </div>

          {/* Certifications */}
          <div className="p-6 mt-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>English Level B2</strong> – IELTS Official (2022)
              </li>
              <li>
                <strong>Karate Black Belt</strong> – FIKTA Lombardia (2021)
              </li>
            </ul>
          </div>
        </div>
      
      </RevealOnScroll>
    </section>
  );
};
