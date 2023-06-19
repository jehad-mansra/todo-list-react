import CardShow from "./cardShow";
import { useContext } from "react";
import CardsContext from "../context/card";

function CardList() {
  const { cards } = useContext(CardsContext);

  const renderCard = cards.map((card) => {
    return <CardShow  key={card.id} card={card} />;
  });

  return <div className="book-list">{renderCard}</div>;
}

export default CardList;
