import React from "react";
import "../scss/Main.scss";

function Main() {
  return (
    <div className="Main">
      <div className="Description container">
        <h1>
          Nikita <br />
          Malyutin
        </h1>
        <p>
          Frontend developer
          <br />
          20 years old
        </p>
        <div>RU | ENG</div>
      </div>
      <div className="MyPhoto-wrapper">
        <div className="MyPhoto container" />
      </div>
    </div>
  );
}

export default Main;
