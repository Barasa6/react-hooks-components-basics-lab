import React from "react";
import image from "../images/demo.png";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// ✅ About component
function About() {
  return (
    <div id="about">
      <h1>About</h1>
      
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />   {/* ✅ render Home */}
      <About />  {/* ✅ render About */}
    </div>
  );
}

export default App;
