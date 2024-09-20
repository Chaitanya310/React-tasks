
import React , {useState} from "react"


// Hooks concept
function App() {
  
  let [counter , setCounter]=useState(5)

 // let counter =5

  const addValue = () => {
    
    counter = counter+1

    setCounter (counter)
    console.log( counter)
}


  return (
    <div>
   <h1>Hello world {counter}</h1>

   <button onClick={addValue}> Click me</button>
   </div>
  )
}

export default App
