import axios from "axios";
import { createContext, useState } from "react";

const CardsContext = createContext();

function Provider({ children }) {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const response = await axios.get("http://localhost:3001/cards");
    setCards(response.data);
  };

  const createCard = async (title, content) => {
    const response = await axios.post("http://localhost:3001/cards", {
      title,
      content,
    });

    const updateCard =  response.data;

    setCards([...cards , updateCard]);
  };

 const handelDeleteCard = async(id)=> {
    await axios.delete(`http://localhost:3001/cards/${id}`)
    const updateCard = cards.filter((card) => {
      return card.id !== id;
    });

    setCards(updateCard);
  }

  const handelEditCard = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/cards/${id}`, {
      title: newTitle,
    });

    const updateCard = cards.map((card) => {
      if (card.id === id) {
        return { ...cards, ...response.data , content: card.content };
      } else {
        return card;
      }
    });
    setCards(updateCard);
  };

  const handleAddedCard = async(item, id) =>{
    const response = await axios.put(`http://localhost:3001/cards/${id}`, {
        content: item,
      });
    const updateCard = cards.map((card) => {
      if (card.id === id) {
        return { ...cards, ...response.data , title: card.title };
      } else {
        return card;
      }
    });
    setCards(updateCard);
  }

  const valueToShare = {
    cards,
    fetchCards,
    createCard,
    handelDeleteCard,
    handelEditCard,
    handleAddedCard,
  };

  return (
    <CardsContext.Provider value={valueToShare}>
      {children}
    </CardsContext.Provider>
  );
}

export default CardsContext;
export { Provider };
