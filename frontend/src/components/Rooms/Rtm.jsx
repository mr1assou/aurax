import React, { useEffect, useState, useRef } from 'react'
import face2 from '../../assets/face4.jpg'
import face1 from '../../assets/face3.jpg'
import { FiSend } from "react-icons/fi";
import { FaChildReaching } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import AgoraRTM from 'agora-rtm-sdk'
import { FaMicrophoneAltSlash } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import AgoraRTC from 'agora-rtc-sdk-ng';

function Rtm({ setUsers, user_id, channel_rtm, token_rtm ,localTracks,setTotalUsers,setReload,reload,users}) {

  const [text, setText] = useState('');
  const [channel, setChannel] = useState();
  // here message of others
  const [messages, setMessages] = useState([]);
  const [mic,setMic]=useState(true);

  const uid = String(user_id);
  useEffect(() => {
    const APP_ID = "dca3bcedaaeb4bde9f618461df7f2aff";
    const client = AgoraRTM.createInstance(APP_ID);
  
    const connect = async () => {
      // Log in to the Agora RTM client
      await client.login({ uid, token: token_rtm });
  
      // Create and set up the RTM channel
      const channel = client.createChannel(channel_rtm);
  
      // Set up event listeners before joining the channel
      channel.on('MemberJoined', (memberId) => {
        if(channel)
          channel.getMembers().then((members)=>{
            setTotalUsers(members.length);
          })
      });
  
      channel.on('MemberLeft', (memberId) => {
        if(channel)
          channel.getMembers().then((members)=>{
            setTotalUsers(members.length);
          })
      });
  
      // Now join the channel after event listeners are set
      await channel.join();
     
  
      // Set up the 'ChannelMessage' event listener to receive messages
      channel.on('ChannelMessage', (message, memberId) => {
        // send message to other users a user join
        if (message.text.includes('i am user 👏 :')) {
          setMessages((currentMessages) => [
            ...currentMessages,
            { uid: memberId, text: message.text },
          ]);
        }
        else if (!message.text.includes('↑')) {
          setMessages(currentMessages => [...currentMessages, { uid: memberId, text: message.text }]);
        } else {
          setReload(true);
        }
      });
  
      setChannel(channel);
    };
  
    connect();
  
    if(parseInt(user_id) != parseInt(channel_rtm)){
      setMic(false);
    }


    return () => {
      if (channel) {
        channel.leave();
      }
      client.logout();
    };
  }, []);
  
  if(channel){
    channel.getMembers().then((members)=>{
      setTotalUsers(members.length);
    })
  }

  useEffect(() => {
    const greeting = () => {
      if(channel){
        channel.sendMessage({ text: `i am user 👏 :${user_id}`, type: 'text' });
        setMessages(currentMessages => [...currentMessages, { uid: user_id, text: `i am user 👏 :${user_id}` }]);
      }
    };

    greeting();
  }, [channel]);



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

  const microphone=()=>{
    let count=0;
    users.forEach((us)=>{
      if(parseInt(user_id)===parseInt(us.uid) && us.staging){
        count++;
      }
    })
    if(mic){
      localTracks[0].setEnabled(false);
      setMic(false);
    }
    else if(!mic && count!=0){
      localTracks[0].setEnabled(true);
      setMic(true);
    }
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
                  <p className='text-xs font-bold text-brown'>
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
        <FaMicrophoneAltSlash className={`cursor-pointer text-xl ${mic ? 'text-white' : 'text-brown'}`}  onClick={microphone}/>
        <CiHeart className='text-brown text-xl font-black' />

      </form>
    </div>
  )
}

export default Rtm
