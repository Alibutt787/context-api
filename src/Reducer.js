const Py=(state, action)=>{
    switch(action){
      case 'increment':
        return state + 1
        case 'decrement':
        return state - 1  
        case 'reset':
          return 2;  
    }}
    export default Py;