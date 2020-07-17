import React ,{createContext}from 'react';
import Aqib from './Aqib';

const ty=React.createContext();
function App(){
  //const ty=createContext();
  return(

    <div>
      <ty.Provider value={"aqib ali butt"}>
     <Aqib  name="bhatt"/>
     </ty.Provider>
  </div>
  )
}
export default App;
export {ty};
