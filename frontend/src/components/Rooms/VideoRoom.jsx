import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';
import { FaRegEye } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

import Rtm from './Rtm';



const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});
export const VideoRoom = () => {
  const location = useLocation();
  let { user_id, token_rtc, token_rtm, channel } = location.state || {};
  const APP_ID = 'dca3bcedaaeb4bde9f618461df7f2aff';
  user_id = parseInt(user_id);
  const TOKEN = token_rtc;
  const CHANNEL = channel;
  const [users, setUsers] = useState([]);
  const [stagedUsers, setStagedUsers] = useState([]);

  const [localTracks, setLocalTracks] = useState([]);
  // this function called when a user joined the channel for remote user
  const handleUserJoined = async (user, mediaType) => {
    // subscribe to see and hear remote user video and audio

    // here when user enter we show him all users staging in his smartphone 


    await client.subscribe(user, mediaType);
    if (mediaType === 'video') {
      const userWithVideoTrack = { ...user, videoTrack: user.videoTrack };

      if (parseInt(user.uid) === parseInt(channel)) {
        setUsers((previousUsers) => [...previousUsers, { ...userWithVideoTrack, staging: true }]);
      }
      else
        setUsers((previousUsers) => [...previousUsers, { ...userWithVideoTrack, staging: false }]);

      setTimeout(() => {
        setStagedUsers((prevStagedUsers) => {
          if (prevStagedUsers.length !== 0) {
            setUsers((prevUsers)=>{
              return prevUsers.map(user =>
                user.staging === false && prevStagedUsers.includes(parseInt(user.uid)) ? 
                { ...user, staging: true } : user
              );
            })
          }
          return prevStagedUsers;
        })
      },1000)
    }
    user.audioTrack.play();
  };
 
  // this function called a user left the channel for remote user
  const handleUserLeft = (user) => {
    console.log('user left:',user.uid);
    setStagedUsers((prevStagedUsers) =>
      prevStagedUsers.filter((u) => u.uid != user.uid)
    );
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };
  useEffect(() => {
    // join the channel
    client
      .join(APP_ID, CHANNEL, TOKEN, user_id)
      .then((uid) =>
        Promise.all([
          AgoraRTC.createMicrophoneAndCameraTracks(),
          uid,
        ])
      )
      .then(([tracks, uid]) => {
        // audio video for each user
        const [audioTrack, videoTrack] = tracks;
        audioTrack.setEnabled(false);
        setLocalTracks(tracks);
        if (parseInt(uid) === parseInt(channel))
          setUsers((previousUsers) => [...previousUsers, { uid, videoTrack, audioTrack, staging: true }]);
        else
          setUsers((previousUsers) => [...previousUsers, { uid, videoTrack, audioTrack, staging: false }]);
        client.publish(tracks);
      });
    // after the local user join the room we call remote users ok
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
    };
  }, []);



  const count = users.filter(item => item.staging == true).length;
  return (
    <div className='mt-2  h-[90vh] '>
      <div className='flex justify-end items-center gap-1'>
        <p className='text-sm text-brown font-bold'>{users.length}</p>
        <FaRegEye className='text-brown' />
      </div>
      <div className={`mt-5 h-full flex flex-col gap-2 ${count > 2 ? 'flex-wrap' : ''}`}>
        {users.map((user, index) => (
          user.staging && <VideoPlayer key={index} user={user} length={count} />
        ))}
        <Rtm stagedUsers={stagedUsers} setStagedUsers={setStagedUsers}
          setUsers={setUsers} user_id={user_id} channel_rtm={channel} token_rtm={token_rtm} 
          localTracks={localTracks} users={users}/>
      </div>
    </div>
  );
};

export default VideoRoom;
