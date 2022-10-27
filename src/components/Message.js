import React from 'react'

function Message() {
    return (
        <div className='message owner bg-transparent p-2 rounded-md gap-2'>
            <div className='messageInfo flex flex-col gap-1'>
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile pic" className='w-[40px] h-[40px] object-cover rounded-full' />
                <span className='text-slate-600 text-xs font-semibold'>Just Now</span>
            </div>
            <div className=''>
                <p className='messageText font-normal bg-slate-100'>Hello</p>
            </div>
        </div>
    )
}

export default Message