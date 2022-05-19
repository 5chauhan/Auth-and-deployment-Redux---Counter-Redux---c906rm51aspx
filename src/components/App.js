import React, { useReducer } from 'react'
import { Reducer } from '../reducers/index';
import '../styles/App.css';
const App = () => {
  const [state,dispatch] = useReducer;
  
 
  return (
    <div id="main">
      <counter />
    </div>
  )
}


export default App;
