import React from "react";
import "../scss/Contacts.scss";
import "../scss/App.scss";

function Contacts() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "30px",
  };
  const p = {
    margin: "0",
    padding: "0",
    paddingTop: "10px",
  };

  return (
    <div className="Contacts container">
      <h1 className="container">Контакты</h1>
      <div style={style} className="container">
        <p style={p}>Имя: Никита Малютин</p>
        <p style={p}>Email: supnovik@gmail.com</p>
        <p style={p}>
          GitHub:{" "}
          <a
            href="https://github.com/Supnovik"
            target="_blank"
            rel="noreferrer"
          >
            Supnovik
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
