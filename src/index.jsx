import React from "react";
import { render } from "react-dom";
import "./style.css";

import { Movies } from "./Movies";

const DUMMY_MOVIES = [
  {
    id: "m1",
    nazev: "Shrek",
    popis:
      "Odvážný Shrek (Mike Myers) pátrá se svým kamarádem, sympatickým a chvastounským oslem (Eddie Murphy) po krásné a divoké princezně Fioně (Cameron Diaz). Za její záchranu chce od intrikána Lorda Farquadda (John Lithgow) získat zpět svou milovanou bažinu. (Bontonfilm)",
    imgUrl: "https://i.pinimg.com/564x/2a/8c/83/2a8c839914f9facd6fbaaef5abf9ff38.jpg",
    sTitulky: false,
  },
  {
    id: "m2",
    nazev: "Titanic",
    popis:
      "Byl obrovský a luxusní. Lidé o něm ve své pýše říkali, že je nepotopitelný. Když vyplouval Titanic na svou první plavbu, byli na jeho palubě také chudý Jack a bohatá Rose. On vyhrál lístek v pokeru, ona měla pronajato jedno z nejluxusnějších apartmá. Prožili spolu nejkrásnější chvíle života a slíbili si, že už se nikdy nerozejdou -",
    imgUrl: "https://i.pinimg.com/564x/ce/0b/bb/ce0bbbdfd4c1d4ff3c6f18a3620ad11e.jpg",
    sTitulky: true,
  },
  {
    id: "m3",
    nazev: "Diktátor",
    popis:
      "Generál Aladeen je jedním z posledních světových diktátorů „ze staré školy“. Ve své zemi vládne téměř neomezenou mocí, kterou financuje prostřednictvím výnosů z těžišť ropy. Pevnou rukou se nebojí popravit kohokoli, kdo s ním nesouhlasí, změnit 300 slov z místního jazyka na své příjmení nebo uspořádat olympijské hry, ",
    imgUrl: "",
    sTitulky: false
  },
];

const AddMovie = () => {
  return <div>Formulář pro přidání filmu</div>;
};

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Filmotéka</h1>
      </header>
      <main>
        <Movies seznamFilmu={DUMMY_MOVIES} />
        <AddMovie />
      </main>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
