import { useState , useContext } from "react";
import CardsContext from "../context/card";

function CardContent ({onSubmit , card}){
    const [item , setItem] = useState(card.content);
    const { handleAddedCard} = useContext(CardsContext)

    function handelChange(e){
        setItem(e.target.value)
    }

    function handelSubmit(e){
        e.preventDefault()
        onSubmit()
        handleAddedCard(item , card.id)
    }

    return <div>

<div>
            <form onSubmit={handelSubmit}>
        <input className="input" onChange={handelChange} value={item} />
        <button  className="button is-primary">Edit</button>
      </form>
      </div>

    </div>
}

export default CardContent ;