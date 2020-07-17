import React, { useContext } from 'react';
import {ty} from './App'



function Zone(){
    const fr=useContext(ty)
return(
<>
<h1>show {fr}</h1>
</>
)
};
export default Zone;