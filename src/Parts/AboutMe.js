import React from "react";
import "../scss/AboutMe.scss";
import "../scss/App.scss";

function AboutMe() {
  return (
    <div className="AboutMe container">
      <h1 className="container">Обо мне</h1>
      <p className="container">
        Студент 3 курса НГУ
        <br /> Механико-математический факультет
        <br /> Направление - прикладная математика и информатика
      </p>
    </div>
  );
}

export default AboutMe;
