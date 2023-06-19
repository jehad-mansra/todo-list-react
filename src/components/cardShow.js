import { useState , useContext } from "react";
import CardsContext from "../context/card";
import CardEdit from "./cardEdit";
import CardContent from "./cardContent";

function CardShow({ card}) {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const {handelDeleteCard} = useContext(CardsContext)

  function handelEditClick() {
    setShowEdit(!showEdit);
  }

  function handelAddedClick() {
    setShowAdd(!showAdd);
  }

  function handelSubmit() {
    setShowEdit(false);
  }

  function handleDeleteClick() {
    handelDeleteCard(card.id);
  }

  function handelSubmit2() {
    setShowAdd(false);
   
  }

  let editContent = <h1 className="title">{card.title}</h1>;
  let content = <p>{card.content}</p>;
  if (showEdit) {
    editContent = <CardEdit onSubmit={handelSubmit} card={card} />;
  }

  if (showAdd) {
    content = <CardContent onSubmit={handelSubmit2} card={card} />;
  }

  return (
    <div className="book-show">
      {editContent}

      <div className="actions">
        <button className="edit" onClick={handelEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <button className="add" onClick={handelAddedClick}>
       +
      </button>
      <p>{content}</p>
    </div>
  );
}

export default CardShow;
