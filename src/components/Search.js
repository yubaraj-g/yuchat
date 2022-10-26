import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div class="searchForm">
        <input type="text" className='bg-transparent w-full p-4 focus:outline-none text-white' placeholder='Search a user' />
      </div>
      <div className="userChat flex items-center px-4 py-2 gap-2 text-gray-300 hover:bg-[#3a394e] cursor-pointer">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-[50px] h-[50px] object-cover rounded-full' />
        <div class="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search