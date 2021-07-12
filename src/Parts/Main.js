import React from "react";
import "../scss/App.scss";
import "../scss/Main.scss";

function Main() {
  return (
    <div className="Main">
      <div className="Description container">
        <h1>
          Никита <br />
          Малютин
        </h1>
        <p>
          Frontend разработчик
          <br />
          20 Лет, Новосибирск
        </p>
      </div>
      <div className="MyPhoto-wrapper">
        <div className="MyPhoto container" />
      </div>
    </div>
  );
}

export default Main;
