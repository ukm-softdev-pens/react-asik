import { useState } from 'react'
import './App.css'
import './global.css'

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <div>
        <h1 className='font-bold'>Hasil Jumlah  {count}</h1>
        <p className='mb-4'>simple counter aplikasi Simple Counter</p>
        <div className='flex flex-row justify-center gap-4'>
        <button onClick={() => setCount(count + 1)}>Tambah +</button>
        <button onClick={() => setCount(count - 1)}>Reset -</button>
        </div>
      </div>  
    </>
  )
}

export default App
