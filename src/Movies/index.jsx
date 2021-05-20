import React from "react";

//   [
//     { id: "m1", nazev: "Shrek", popis: "O zelené potvoře", imgUrl: "http..." },
//     { id: "m2", nazev: "Titanic", popis: "O zelené potvoře", imgUrl: "http..." },
//     { id: "m3", nazev: "Shrek", popis: "O zelené potvoře", imgUrl: "http..." },
//   ];

export const Movies = (props) => {

  return (
    <>
      <h2>Přehled mých oblíbených filmů</h2>
      <ul>
        {props.seznamFilmu.map((film) => {
          return <li>{film.nazev} | {film.popis}</li>
        })}
      </ul>
    </>
  );
};
