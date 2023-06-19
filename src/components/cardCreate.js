import { useState , useContext } from "react";
import CardsContext from "../context/card";


function CardCreate() {
  const [title, setTitle] = useState("");
  const {createCard} = useContext(CardsContext)
  function handelChange(event) {
    setTitle(event.target.value);
  }
const content = ''
  function handelSubmit(e ) {
    e.preventDefault();
    createCard(title , content );
    setTitle("");
  }
  return (
    <div className="book-create">
      <h3>Add a Card</h3>
      <form onSubmit={handelSubmit}>
        <label>Title</label>
        <input className="input" onChange={handelChange} value={title} />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default CardCreate;
