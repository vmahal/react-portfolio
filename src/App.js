// import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Skills from "./Components/Skills";
import './App.css';
import FooterBot from "./Components/FooterBot";


function App() {
  return (
    <div style={{backgroundColor: "#01051b"}} className="App app-background">
      {/* <NavigationBar/> */}
      <Home/>
      <Project/>
      <Skills/>
      <About/>
      <FooterBot/>
    </div>
  );
}

export default App;
