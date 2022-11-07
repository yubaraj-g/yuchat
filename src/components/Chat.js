import React from 'react'
import AddFriend from '../img/addFriendIcon.png'
import More from '../img/more.png'
import Messages from './Messages'
import TypeInput from './Typeinput'

function Chat() {
  return (
    <div className='chat w-2/3 justify-between'>
      <div className="chatTopBar flex justify-between p-4 bg-[#5d5b8d]">
        <span className='profileName font-semibold text-xl text-white'>Jane</span>
        <div className='chatIcons flex items-center gap-4'>
          <img src={AddFriend} alt="" className='w-[18px] h-[18px]' />
          <img src={AddFriend} alt="" className='w-[18px] h-[18px]' />
          <img src={More} alt="" className='w-[20px] h-[20px]' />
        </div>
      </div>

      <Messages />
      <TypeInput />
    </div>
  )
}

export default Chat