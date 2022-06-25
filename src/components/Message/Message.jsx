import React from 'react'
import './Message.css'
import tickIcon from "../../images/tick.svg"


const Message = ({direction}) => {
  let position = (direction==='right'|| !direction)? "right" : "left"
  const messageClass = ['message',position].join(" ")
  return (
    <div  className={messageClass}>
      <p>dummy text</p>
      {direction==='right' && (<div className='message-detail'>
        <span>18:35</span>
        <img src={tickIcon} alt="tick" />
        </div>)}
    </div>
  )
}

export default Message