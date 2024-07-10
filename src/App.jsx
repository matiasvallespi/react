import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const backgroundImageUrl="https://png.pngtree.com/thumb_back/fh260/background/20221110/pngtree-video-game-console-controller-pattern-seamless-vector-repeat-geometric-yellow-for-image_1455567.jpg"

  return (
    <>
      <div>
        <div><p style={{ backgroundImage: `url(${backgroundImageUrl})` }} className='w-150 h-10 font-bold text-white rounded m-20'><span className='hover:text-3xl hover:text-sky-200'>Controles PES para onvres:</span>  <span className='hover:text-gray-500 hover:text-2xl'>R1 = Correr</span> <span className='hover:text-gray-500 hover:text-2xl'>L1 = Cambiar Jugador</span>   <span className='hover:text-green-500 hover:text-2xl'>△ = Pase Profundidad</span>  <span className='hover:text-blue-400 hover:text-2xl'>X = Pase Corto</span>  <span className='hover:text-red-400 hover:text-2xl'>◯ = Centro</span>  <span className='hover:text-purple-400 hover:text-2xl'>▢ = Tiro</span> </p></div>
        <button className='m-10 border-2 border-black rounded p-2 font-bold hover:bg-black hover:text-white active:bg-red-600'>Click Here!</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
