import { useState } from 'react'
import './App.css'
import './global.css'

function App() {

  const [count,setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='font-bold'>jumlah count {count}</h1>
        <p className='mb-4'>simple Router</p>
        <div className='flex flex-row justify-center gap-4'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>  
    </>
  )
}

export default App
