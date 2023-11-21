import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="w-full font-epilog font-medium texl-lg sm:relative text-stone-500">
      <NavBar />
      <div className="w-full sm:flex sm:relative sm:z-10 sm:gap-40 sm:pr-20 sm:items-center sm:pl-20">
        <div className="w-full sm:order-2 sm:w-2/4 px-10">
          <img src="./image-hero-mobile.png" alt="" className="w-full sm:hidden h-auto" />
          <img src="./image-hero-desktop.png" alt="" className="w-full hidden sm:block h-auto" />
        </div>
        <div className="sm:w-2/4 sm:order-1 sm:pl-12">
          <div className="flex flex-col sm:block sm:space-y-10 justify-center items-center w-full gap-4 py-10">
            <h1 className='text-4xl sm:text-8xl font-bold text-neutral-900'>
              Make remote work
            </h1>
            <p className='text-center sm:text-left'>
              Get your team in sync, no matter your
              location.Streamline processes, create team rituals, and watch the productivity soar.
            
            </p>
            <button className="rounded-xl bg-neutral-900 px-5 hover:text-neutral-500 hover:bg-white hover:border-2 hover:border-text-zinc-400 font-bold py-3 text-zinc-50 sm:mb-20">
              Learn more
            </button>
          </div>
          <div className="flex gap-8 px-8 sm:p-0 sm:w-full sm:gap-0 sm:justify-between">
            <div className="img">
              <img src="./client-databiz.svg" alt="" />
            </div>
            <div className="img">
              <img src="./client-audiophile.svg" alt="" />
            </div>
            <div className="img">
              <img src="./client-meet.svg" alt="" />
            </div>
            <div className="img">
              <img src="./client-maker.svg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
