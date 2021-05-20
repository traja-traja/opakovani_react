import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";

import { Movies } from "./Movies";
import { AddMovie } from "./AddMovie";

// API: http://www.traja.cz/react/filmy.json

/*
  Pozn. Úplně správně patří CSS styly, které náleží ke konkrétní komponentě, do adresáře s touto komponentou.
  Např. styly pro komponentu Movie mají být v souboru src/Movie/styly.css a v souboru src/Movie/index.jsx bychom je pak importovaly.
  Pro úsporu času máme však všechny styly v src/style.css a pohoda 😉
*/

const App = () => {
  const [seznamFilmu, setSeznamFilmu] = useState([]);

  useEffect(() => {
    fetch("http://www.traja.cz/react/filmy.json")
      .then((response) => response.json())
      .then((data) => setSeznamFilmu(data));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Filmotéka</h1>
      </header>
      <main>
        <Movies seznamFilmu={seznamFilmu} />
        <AddMovie />
      </main>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
