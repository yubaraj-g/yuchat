import React from 'react'
import photoAttach from '../img/imageattach.png'
import fileAttach from '../img/fileattach.png'
import sendIcon from '../img/send.png'

function Typeinput() {
  return (
    <div className='typeinput p-3 items-center justify-between'>
      <input type="text" placeholder='Start typing..' className='w-5/6 focus:outline-none h-full' />
      <div className='send flex w-1/6 justify-between'>
        <img src={fileAttach} alt="" />
        <input type="file" id='fileSend' style={{display: 'none'}} />
        <label htmlFor="fileSend">
          <img src={photoAttach} alt="" />
        </label>
        <button className='sendBtn'>
          <img src={sendIcon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Typeinput