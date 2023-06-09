import React, { useState } from 'react'
import Thanks from './Component/Thanks'
import Home from './Component/Home';


const App = () => {
  const [isSubmitted, setisSubmitted]= useState(false);
  
  return (
    <>
      <>
        
      {
        isSubmitted ? <Thanks/> : <Home setisSubmitted={setisSubmitted}/>
      }

      </>
    </>
  )
}

export default App
