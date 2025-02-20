import React, { useEffect, useState, useRef } from 'react'
import face2 from '../../assets/face4.jpg'
import face1 from '../../assets/face3.jpg'
import { FiSend } from "react-icons/fi";
import { FaChildReaching } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import AgoraRTM from 'agora-rtm-sdk'
import { FaMicrophoneAltSlash } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";


function Rtm({ setUsers, user_id, channel_rtm, token_rtm }) {
  const [text, setText] = useState('');
  const [channel, setChannel] = useState();
  // here message of others
  const [messages, setMessages] = useState([]);
  const uid = String(user_id);
  useEffect(() => {
    const APP_ID = "dca3bcedaaeb4bde9f618461df7f2aff";
    const client = AgoraRTM.createInstance(APP_ID);
    const connect = async () => {
      // here channel rtm is same as uid
      await client.login({ uid, token: token_rtm })
      const channel = client.createChannel(channel_rtm);
      await channel.join();
      // receive messages of remote user
      channel.on('ChannelMessage', (message, memberId) => {
        if (!message.text.includes("↑"))
          setMessages(currentMessages => [...currentMessages, { uid: memberId, text: message.text }]);
        else {
          // Handle arrow messages to update staging status
          const [_, targetUid] = message.text.split(':'); // Extract UID from message
          setUsers(prevUsers =>
            prevUsers.map(user =>
              user.uid === parseInt(targetUid)
                ? { ...user, staging: true }
                : user
            )
          );
        }

      })
      setChannel(channel);
    }
    connect();

    return () => {
      if (channel) {
        channel.leave();
      }
      client.logout();
    }
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    if (text === '') return;
    // we send message and see all message for local user
    channel.sendMessage({ text, type: 'text' })
    setMessages(currentMessages => [...currentMessages, { uid: user_id, text }]);
    setText('');
  }
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const stagingRequest = () => {
    channel.sendMessage({ text: '👏', type: 'text' })
    setMessages(currentMessages => [...currentMessages, { uid: user_id, text: "👏" }]);
  }

  const showUp = (uid) => {
    channel.sendMessage({ text: `↑:${uid}`, type: 'text' })
    setMessages(currentMessages => [...currentMessages, { uid: user_id, text: `↑:${uid}` }]);
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.uid === parseInt(uid)
          ? { ...user, staging: true }
          : user
      )
    );
  }
  return (
    <div className='w-full h-[18%] absolute left-0 bottom-0 flex flex-col justify-between'>
      {/* Wrap messages in a fixed-height container */}
      <div className='h-[300px] relative'> {/* Added relative positioning */}
        <div className='absolute inset-0 overflow-y-auto  '>

          <div className='p-2 flex flex-col'>
            {messages.map((message, index) => (
              !message.text.includes("↑") && <div className='mt-2' key={index}>
                <div className='flex w-full items-start gap-1'>
                  <div className='w-[30px] h-[30px] rounded-full'>
                    <img src={face1} alt="" className='rounded-full object-cover w-full h-full' />
                  </div>
                  <p className='text-xs font-bold text-white'>
                    Marwane Assou
                  </p>
                  {
                    message.text === "👏" && user_id == channel_rtm && <FaHandsClapping className='text-white' onClick={() => showUp(message.uid)} />
                  }
                </div>
                <p className='ml-12 text-white text-[8px] bg-blight px-2 py-2 rounded-lg font-bold'>{message.text}</p>
              </div>
            ))}
          </div>
          {messages.length !== 0 && <div ref={messagesEndRef} />}
        </div>
      </div>

      {/* Form stays outside the scrollable area */}
      <form className='p-2 flex  gap-2 items-center bg-black' onSubmit={sendMessage}>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          className='text-white bg-blight py-2 px-3 rounded-lg w-[70%] block outline-none text-[8px]'
          placeholder='comment...'
        />
        <button type="submit">
          <FiSend className="text-brown text-xl cursor-pointer" />
        </button>
        {
          user_id != channel_rtm
          && <FaChildReaching className='text-white text-xl' onClick={stagingRequest} />
        }
        <CiHeart className='text-white text-xl font-black' />
        <FaMicrophoneAltSlash className='text-white text-xl' />

      </form>
    </div>
  )
}

export default Rtm
