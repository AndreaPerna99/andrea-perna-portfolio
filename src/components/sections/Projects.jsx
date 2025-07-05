import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "LogAnalyzer for Anomaly Detection in Autonomous Drones",
      github: "https://github.com/andreaperna99/loganalyzer-drones",
      description:
        "Developed a real-time LogAnalyzer leveraging PX4 telemetry, combining a rule-based layer for structured anomaly detection with machine learning techniques for outlier identification. Enabled in-flight behavioral adaptation in autonomous drones during missions.",
      tech: ["Python", "PX4", "Git", "Docker", "Pandas", "Scikit-learn", "Outliers Detection"],
    },
    {
      title: "Distributed Multi-Robot Search and Rescue Operations Using Aggregative Optimization and BDI Agents in a Multi-Room House Environment",
      github: "https://github.com/andreaperna99/multi-robot-sar",
      description:
        "Designed a distributed multi-robot SAR system using BDI agents and aggregative optimization. Robots explored a multi-room house, located and escorted survivors, and dispatched an autonomous ambulance, maintaining formation and obstacle avoidance in mission-critical scenarios.",
      tech: ["Python", "ROS2", "BDI", "Gazebo"],
    },
    {
      title: "Electronic Arduino-Based Escape Room Development",
      github: "https://github.com/andreaperna99/arduino-escape-room",
      description:
        "Built a fully interactive Arduino-based escape room with electronic puzzles, custom PCBs, and embedded software. Designed the full experience from storyline to hardware and gameplay logic, using sensors and actuators for immersive automation.",
      tech: ["Arduino", "PCB Design", "C++", "Eagle"],
    },
    {
      title: "Distributed Multi-Robot Corridor Navigation Using ROS2",
      github: "https://github.com/andreaperna99/multi-robot-corridor",
      description:
        "Developed a ROS2-based distributed control framework for coordinated robot formation in corridor environments using Aggregative Tracking. Ensured decentralized target pursuit, collision avoidance, and real-time state monitoring through RViz visualization.",
      tech: ["ROS2", "Python", "Distributed Systems", "Aggregative Optimization"],
    },
    {
      title: "3D Stereo Reconstruction & Depth Estimation in Robot Navigation",
      github: "https://github.com/andreaperna99/stereo-depth-robot",
      description:
        "Developed a stereo vision system for autonomous navigation using SGBM and chessboard-based sparse matching. Enabled real-time obstacle distance estimation, safety alerts, and accurate dimensioning for reliable collision avoidance.",
      tech: ["OpenCV", "Python", "StereoSGBM", "Camera Calibration"],
    },
    {
      title: "Modeling and Simulation of a UR5 Robot Manipulator",
      github: "https://github.com/andreaperna99/ur5-modeling",
      description:
        "Modeled the UR5 robotic arm in 20Sim using bond graphs and energy-based dynamics. Simulated joint behavior and torque response with PID control via twists, wrenches, and Euler-based equations.",
      tech: ["20Sim", "URDF", "SimMechanics"],
    },
    {
      title: "Distributed Classification via Logistic Regression",
      github: "https://github.com/andreaperna99/distributed-logreg",
      description:
        "Designed a fully distributed logistic regression system using Gradient Tracking, where agents collaboratively learned a global decision function without data sharing by exchanging local gradients and reaching consensus over a communication network.",
      tech: ["Python", "Logistic Regression", "Distributed Systems", "Gradient Tracking"],
    },
    {
      title: "Autonomous and Mobile Sanitize Robot: SLAM-Based Navigation and Control in a Multi-Room House Environment",
      github: "https://github.com/andreaperna99/autonomous-sanitize-robot",
      description:
        "Developed a fully autonomous sanitizer robot using ROS2 for multi-room environments. The system performs SLAM-based mapping and localization, plans paths to room centers, and executes complete coverage using Boustrophedon decomposition. Simulated in Gazebo with real-time visualization in Rviz.",
      tech: ["ROS2", "SLAM", "Python", "TurtleBot", "Gazebo", "Rviz"],
    },
    {
      title: "Optimal Control of a Quadrotor with Suspended Load",
      github: "https://github.com/andreaperna99/optimal-control-quadrotor",
      description:
        "Designed an optimal controller for a quadrotor with suspended load by computing state-input trajectories via Newton's method. Implemented LQR and MPC strategies to track reference profiles (step and poly5), ensuring dynamic feasibility and cost efficiency.",
      tech: ["Python", "Optimization", "MPC"],
    },
    {
      title: "Business Plan for FitFlow Innovative Startup",
      github: "https://github.com/andreaperna99/fitflow-business-plan",
      description:
        "Prepared a comprehensive business model and go-to-market strategy for FitFlow, an innovative digital wellness startup offering personalized coaching through a tech-driven platform. Included financial projections, competitive analysis, and growth roadmap.",
      tech: ["Business Planning", "Market Analysis"],
    },
    {
      title: "Logistic Regression on Multi-Class Classification Problem",
      github: "https://github.com/andreaperna99/learning-estimation-dynamical-systems",
      description:
        "Designed and implemented a multi-class logistic regression (one-vs-all) classifier using Netwon-Raphson optimization in MATLAB, achieving high accuracy classification across fourc classes by modelung decision boundaries and minimizing logistic loss functions.",
      tech: ["MATLAB", "Logistic Regression", "Classification"],
    },
    {
      title: "System Identification of an Unknown AR Model",
      github: "https://github.com/andreaperna99/learning-estimation-dynamical-systems",
      description:
        "Performed black-box system identification of a discrete-time AR model using least squares estimation in MATLAB, selecting model structure and order via statistical criteria and validating reconstruction accuracy through residual analysis.",
      tech: ["MATLAB", "System Identification", "Least Squares"],
    },
    {
      title: "Remote Control Software for a Digital Microwave Oscilloscope",
      github: "https://github.com/andreaperna99/oscilloscope-remote",
      description:
        "Developed a LabVIEW-based remote control interface for a Tektronix digital oscilloscope using VISA protocol, enabling full-featured automated acquisition, waveform analysis, and measurement logging.",
      tech: ["LabVIEW", "VISA", "Tektronix", "Oscilloscope"],
    },
    {
      title: "Arduino RC Car Software and Hardware Development",
      github: "https://github.com/andreaperna99/arduino-rc-car",
      description:
        "Designed and implemented the complete firmware and hardware architecture for an Arduino-powered RC car, featuring wireless control, obstacle detection with sensors, and autonomous navigation logic.",
      tech: ["Arduino", "C++", "Embedded Systems", "Wireless"],
    },
    {
      title: "CoinHunter – 3D Coin Collection Game",
      github: "https://github.com/andreaperna99/coin-hunter-3d-game",
      description:
        "Developed a 3D mini-game in Unity where the player collects coins in a dynamic environment, featuring custom 3D models created in Blender, real-time physics-based interactions, and fully scripted gameplay mechanics using C#.",
      tech: ["Unity", "C#", "Blender", "Game Design"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 break-words">
        <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          💻 Projects
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <RevealOnScroll key={idx}>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 mt-2 bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-300 hover:shadow transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    GitHub Page
                  </a>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );  
};
