import { useState } from "react";
export default function Counter() {
  let [counter, setCounter] = useState(0);
  console.log(`"Render Counter" ${counter}`);
  function handleClick(e) {
    // this wrong way
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // this way
    setCounter(counter + 1); // 3
    console.log(counter);
  }
  return ( 
    <div className="">
      <button onClick={handleClick}>Click for increment</button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
