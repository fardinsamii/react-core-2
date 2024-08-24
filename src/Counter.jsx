import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
       const newCount = count + 1;
       setCount(newCount);
    }
    const handleReduce = () =>{
        if(count > 0){
            const reduceCount = count - 1;
            setCount(reduceCount);
        }
        
    }
    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add Number</button>
            <button onClick={handleReduce}>Reduce Number</button>
        </div>
    )
}