import { useState, useContext } from "react";
import CardsContext from "../context/card";

function CardEdit({ onSubmit, card }) {
  const [title, setTitle] = useState(card.title);
  const { handelEditCard } = useContext(CardsContext);

  function handelChange(e) {
    setTitle(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    onSubmit();
    handelEditCard(card.id, title);
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label> Edit Card!</label>
        <input className="input" onChange={handelChange} value={title} />
        <button className="button is-primary">Edit</button>
      </form>
    </div>
  );
}

export default CardEdit;
