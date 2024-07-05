// import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Skills from "./Components/Skills";
import './App.css';
import FooterBot from "./Components/FooterBot";
import { Button } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";


function App() {

  const [isLightMode, setMode] = useState(false);

  const handleClick = () => {
    setMode(!isLightMode);
  }

  return (
    <div style={{ backgroundColor: "#01051b" }} className={isLightMode ? "app-background-lightMode" : "app-background-darkMode"}>
      <div className="divMode">
        <Button onClick={handleClick}>{!isLightMode ? <LightModeIcon className="iconMode" /> : <DarkModeIcon sx={{ color: "black" }} className="iconMode" />}</Button>
      </div>
      <Home currMode={isLightMode} />
      <Project currMode={isLightMode} />
      <Skills currMode={isLightMode} />
      <About currMode={isLightMode} />
      <FooterBot currMode={isLightMode} />
    </div>
  );
}

export default App;
