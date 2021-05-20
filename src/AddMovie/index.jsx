import React from "react";

// tuto komponentu jsme nakonec ani nepoužívali :-)

export const AddMovie = () => {
  return (
    <form className="formular">
      <div>
        <label htmlFor="nazev">Název filmu: </label>
        <input
          placeholder="název filmu"
          type="text"
          id="nazev"
        />
      </div>
      <div>
        <label htmlFor="nazev">Adresa obrázku: </label>
        <input
          placeholder="obrázek"
          type="text"
          id="imgUrl"
        />
        <button className="btn">Přidat film</button>
      </div>
    </form>
  );
};
