import { useState } from "react"

export default function Team(){
    const [player, setPlayer] = useState(0);
    let teamStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
    }
    const addPlayer = () => {
        const newPlayer = player + 1;
        setPlayer(newPlayer);
    }
    const removePlayer = () => {
        const reducePlayer = player - 1;
        setPlayer(reducePlayer);
    }
    if (player > 0){
         teamStyle = {
            border: '4px solid green',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
        }
    }if(player > 5){
        teamStyle = {
            border: '4px solid blue',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
        }
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {player}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}