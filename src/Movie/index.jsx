import React from 'react';

export const Movie = (props) => {
    const upozorneni = props.sTitulky ? <p><b>Tento film je s titulky.</b></p> : null;

    // const jeOblibeny = true;

    // const [ jeOblibeny, setJeOblibeny ] = useState(false);

    // const handleClick = () => {
    //     setJeOblibeny(true);
    // };

    // let tridaProFilm = "movie";
    // if (props.sTitulky) {
    //     tridaProFilm = tridaProFilm + " movie--s-titulky";
    // }

    // const tridaProFilm = `movie ${props.sTitulky ? "movie--s-titulky" : ""}`;

    return (
        <div className="movie">
            <img src={props.imgUrl} alt="" />
            <h2>{props.nazev}</h2>
            {upozorneni}
            <p>{props.popis}</p>
            <div className="action-buttons">
            <button className="btn">-</button>
                5
            <button className="btn">+</button>
            </div>
        </div>
    );
};

// Varianta: <button className="btn" onClick={() => setJeOblibeny(true)}>Přidat mezi oblíbené</button>