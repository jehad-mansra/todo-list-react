import { useContext, useEffect } from "react";
import CardCreate from "./components/cardCreate";
import CardList from "./components/cardList";
import CardsContext from "./context/card";

function App() {
  const { fetchCards } = useContext(CardsContext);

  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <div className="App">
      <CardList />
      <CardCreate />
    </div>
  );
}

export default App;
