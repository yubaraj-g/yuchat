import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function sidebar() {
  return (
    <div className='sidebar w-1/3 bg-slate-700 shadow-md shadow-gray-800'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default sidebar