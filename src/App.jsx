import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

/*
import MultiRobotSAR from "./projectPages/MultiRobotSAR";
import LogAnalyzer from "./projectPages/LogAnalyzer";
import EscapeRoom from "./projectPages/EscapeRoom";
import DistributedClassification from "./projectPages/DistributedClassification";
import OptimalControlQuadrotor from "./projectPages/OptimalControlQuadrotor";
import AutonomousSanitizeRobot from "./projectPages/AutonomousSanitizeRobot";
import DistributedMultiRobot from "./projectPages/DistributedMultiRobotCorridor";
import BusinessPlan from "./projectPages/BusinessPlan";
import StereoReconstruction from "./projectPages/StereoDepthEstimation";
import MultiClassLogReg from "./projectPages/MultiClassLogReg";
import UR5Modeling from "./projectPages/UR5Modeling";
import ArduinoRCCar from "./projectPages/ArduinoCar";
import OscilloscopeInterface from "./projectPages/OscilloscopeInterface";
import ArduinoCar from "./projectPages/ArduinoCar";
import ArcadeQuestGame from "./projectPages/ArcadeQuestGame";
*/

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
