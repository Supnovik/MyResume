import React, { useEffect, useState } from "react";
import Main from "./Parts/Main";
import AboutMe from "./Parts/AboutMe";
import Contacts from "./Parts/Contacts";
import Skills from "./Parts/Skills";
import Portfolio from "./Parts/Portfolio";

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
      <div className={"nav-bar container " + navstyle}>
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box container">
          <a className="menu__item" href="#home">
            Главная
          </a>
          <a className="menu__item" href="#aboutme">
            Обо мне
          </a>
          <a className="menu__item" href="#skills">
            Навыки
          </a>
          <a className="menu__item" href="#portfolio">
            Портфолио
          </a>
          <a className="menu__item" href="#contacts">
            Контакты
          </a>
        </ul>
      </div>

      <div>
        <section id="home"></section>
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
