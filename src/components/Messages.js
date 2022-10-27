import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className='messages bg-cyan-300 flex flex-col p-2 gap-2 h-full scroll-m-1'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages