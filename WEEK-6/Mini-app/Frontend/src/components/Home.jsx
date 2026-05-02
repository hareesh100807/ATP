import {useContext} from "react";
import {counterContextObj} from "../contexts/ContextProvider";
import Test from "./Test";
import { useCounterStore } from "../store/CounterStore";

function home() {
  console.log("home")
  //call useCounterStore to get the state and functions from the Zustand store
  let  newCounter = useCounterStore(state=> state.newCounter)
  let incrementCounter = useCounterStore(state=> state.incrementCounter)
  let newCounter1  = useCounterStore(state=> state.newCounter1)
  let incrementCounter1 = useCounterStore(state=> state.incrementCounter1)

  // const {counter,changeCounter,counter1,changeCounter1}=useContext(counterContextObj);
  

  return (
    <div>
      
      <h1>newCounter: {newCounter}</h1>
      <button onClick={incrementCounter} className=" bg-amber-300 p-3"> Increment new counter</button>
      

      {/* <h1>newCounter1: {newCounter1}</h1>
      <button onClick={incrementCounter1} className=" bg-amber-300 p-3"> Increment new counter</button> */}
      <Test />
         </div>
         
  )
}

export default home
