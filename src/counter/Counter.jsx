import { useState } from "react";

export default function Counter({name}){
    const [count, setCount]= useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div className="">
            <h1>Count {name}: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}