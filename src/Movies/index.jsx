import React from "react";

import { Movie } from "../Movie";

export const Movies = (props) => {
  return (
    <>
      <h2>Přehled mých oblíbených filmů</h2>
      <ul>
        {props.seznamFilmu.map((film) => (
          <Movie
            key={film.id}
            id={film.id}
            nazev={film.nazev}
            popis={film.popis}
            imgUrl={film.imgUrl}
            sTitulky={film.sTitulky}
          ></Movie>
        ))}
      </ul>
    </>
  );
};

// export const Movies = (props) => {
//   return (
//     <>
//       <h2>Přehled mých oblíbených filmů</h2>
//       <ul>
//         {props.seznamFilmu.map((film) => {
//           return (
//             <Movie
//               key={film.id}
//               id={film.id}
//               nazev={film.nazev}
//               popis={film.popis}
//               imgUrl={film.imgUrl}
//               sTitulky={film.sTitulky}
//             ></Movie>
//           );
//         })}
//       </ul>
//     </>
//   );
// };
