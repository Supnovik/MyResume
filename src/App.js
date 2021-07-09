import React from "react";
import Main from "./Parts/Main";
import AboutMe from "./Parts/AboutMe";
import "./scss/App.scss";

function App() {
  return (
    <div className="Page">
      <header className="conteiner">
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul>
      </header>
      <div className="Content container">
        <Main />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
