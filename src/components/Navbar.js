import React from 'react'

function Navbar() {
  return (
    <div className='navbar flex h-16 px-5 bg-slate-700 items-center justify-between text-[#e4e4fa] shadow-md'>
      <span className='logo font-bold text-lg'>YuChat</span>
      <div className='user flex items-center gap-2'>
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='bg-slate-400 rounded-full w-[35px] h-[35px] object-cover cursor-pointer' />
        <span className='profileName text-md'>John</span>
        <button className='bg-[#5d5b8d] hover:bg-slate-400 hover:text-black px-3 py-1 text-sm font-normal rounded-sm'>logout</button>
      </div>
    </div>
  )
}

export default Navbar