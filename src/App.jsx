import { useState } from 'react'
import './App.css'
//import ComponentOneExt from './components/ComponentOneExt'
//import ComponentTwoExt from './components/ComponentTwoExt';
//import ComponentTwoOneExt from './components/ComponentTwoOneExt';
//import ComponentFourExt from './components/ComponentFourExt'
import ComponentFiveExt from './components/ComponentFiveExt';

function App() {
  const [count, setCount] = useState(0)
  console.log("Re-render App");
  return (
    <>
      <div className='App'>
        <ComponentFiveExt />
        <h1>APP </h1>
        <h2>APP - Count : {count}</h2>
        <button onClick={() => setCount(count+1)}> + Count</button>
        <button onClick={() => setCount(count-1)}> - Count</button>
      </div>
    </>
  )
}

export default App
