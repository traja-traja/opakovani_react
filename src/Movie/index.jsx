import React, { useState } from 'react';

export const Movie = (props) => {
    const upozorneni = props.sTitulky ? <p><b>Tento film je s titulky.</b></p> : null;

    const [ score, setScore ] = useState(5);

    const handlePlusClick = () => {
        setScore(score + 1);
    };

    const handleMinusClick = () => {
        setScore(score - 1);
    };

    return (
        <div className={`movie ${score <= 5 ? "movie--neoblibene" : "movie--oblibene" }`}>
            <img src={props.imgUrl} alt="" />
            <h2>{props.nazev}</h2>
            {upozorneni}
            <p>{props.popis}</p>
            <div className="action-buttons">
            <button className="btn" onClick={handleMinusClick}>-</button>
                {score}
            <button className="btn" onClick={handlePlusClick}>+</button>
            </div>
        </div>
    );
};

// Varianta: <button className="btn" onClick={() => setJeOblibeny(true)}>Přidat mezi oblíbené</button>

// Varianta: <button className="btn" onClick={() => setScore(score + 1)}>+</button>