import {useContext} from "react";
import {counterContextObj} from "../contexts/ContextProvider";
import { useCounterStore } from "../store/CounterStore";

function Test() {
    console.log("Test")
  const {counter,changeCounter,counter1,changeCounter1}=useContext(counterContextObj);
  let newCounter1=useCounterStore((state)=> state.newCounter1);
  let incrementCounter1=useCounterStore((state)=> state.incrementCounter1);
  let decrement=useCounterStore((state)=> state.decrement);

  return (
    <div>
      {/* <h1>Counter1: {counter1}</h1>
      <button onClick={changeCounter1}>Increment</button> */}
      <h1>newCounter1: {newCounter1}</h1>
      <button onClick={incrementCounter1} className="bg-red-300 p-3">Increment</button>
        <h1>newCounter1: {newCounter1}</h1>
      <button onClick={decrement} className="bg-red-300 p-3">Decrement by 20 </button>
    </div>
  )
}

export default Test;
