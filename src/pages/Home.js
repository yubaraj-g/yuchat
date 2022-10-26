import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className='home bg-cyan-600 flex justify-center items-center w-full h-screen'>
        <div class="container flex w-5/6 h-5/6 rounded-md bg-white overflow-hidden shadow-lg shadow-indigo-400">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home