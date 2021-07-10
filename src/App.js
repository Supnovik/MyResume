import React, { useEffect, useState } from "react";
import Main from "./Parts/Main";
import AboutMe from "./Parts/AboutMe";
import Contacts from "./Parts/Contacts";
import Skills from "./Parts/Skills";
import Portfolio from "./Parts/Portfolio";
import "./scss/App.scss";

function App() {
  let [navstyle, setNavstyle] = useState("");

  const handleScroll = () => {
    console.log(1);
    if (window.scrollY !== 0) {
      setNavstyle((navstyle = "active"));
    } else setNavstyle("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <div className="Page">
      <section id="home"></section>
      <div className={"nav-bar container " + navstyle}>
        <ul className="container">
          <a href="#home">Главная</a>
          <a href="#aboutme">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#contacts">Контакты</a>
        </ul>
      </div>
      <div>
        <Main />
        <section id="aboutme">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="contacts">
          <Contacts />
        </section>
      </div>
    </div>
  );
}

export default App;
