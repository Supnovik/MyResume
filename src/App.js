import React, { useEffect, useState } from "react";
import Main from "./Parts/Main";
import AboutMe from "./Parts/AboutMe";
import Contacts from "./Parts/Contacts";
import Skills from "./Parts/Skills";
import Portfolio from "./Parts/Portfolio";

function App() {
  let [navstyle, setNavstyle] = useState("");
  let [menubtn, setMenubtn] = useState("");

  function setMenu() {
    if (menubtn === "") {
      setMenubtn("menu-active");
    } else setMenubtn("");
  }

  const handleScroll = () => {
    console.log(1);
    if (window.scrollY !== 0) {
      setNavstyle((navstyle = "active "));
    } else setNavstyle("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <div className="Page">
      <div className={"nav-bar container " + navstyle + menubtn}>
        <div class={"menu__btn"} onClick={() => setMenu()}>
          <span></span>
        </div>
        <ul className="menu__box container">
          <a className="menu__item" href="#home" onClick={() => setMenu()}>
            Главная
          </a>
          <a className="menu__item" href="#aboutme" onClick={() => setMenu()}>
            Обо мне
          </a>
          <a className="menu__item" href="#skills" onClick={() => setMenu()}>
            Навыки
          </a>
          <a className="menu__item" href="#portfolio" onClick={() => setMenu()}>
            Портфолио
          </a>
          <a className="menu__item" href="#contacts" onClick={() => setMenu()}>
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
