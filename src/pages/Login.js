import React from 'react'

function login() {
  return (
    <div className="flex bg-cyan-600 w-full h-screen text-center text-black justify-center items-center">
      <div className='formContainer bg-white p-10 rounded-md shadow-xl shadow-sky-700 w-2/5'>
        <div className='formWrapper flex flex-col gap-6 p-2 items-center'>
          <div className='logo font-bold text-2xl text-blue-500'>YuChat</div>
          <div className='title'>Login</div>
          <form action="/" className='flex flex-col gap-4 text-black w-2/3'>
            <input type="text" placeholder='Enter your username' />
            <input type="password" placeholder='Enter your password' />
          </form>
          <button className='w-2/5 py-3 bg-cyan-600 hover:bg-cyan-500 rounded font-semibold text-white hover:text-black'>Login</button>
          <p className='text-sm text-blue-500 cursor-pointer'>Don't have an account? <a href="/">Register</a></p>
        </div>
      </div>
    </div>
  )
}

export default login