import React,{useReducer} from 'react';
import Py from './Reducer';
const initialstate=1;
function Aqib(){
    const [state, dispatch]=useReducer(Py ,10)
  return(
    <div>
      <h1>counter {state}</h1>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrements</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    
    
  </div>
  )
}
export default Aqib;
