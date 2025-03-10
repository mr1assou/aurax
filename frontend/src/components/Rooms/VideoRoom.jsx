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
  const [totalUsers, setTotalUsers] = useState(0);
  const [reload, setReload] = useState(false);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    console.log('remote user',user);
    await client.subscribe(user, mediaType);
    if (mediaType === 'video') {
      const userWithTracks = { ...user, videoTrack: user.videoTrack ,audioTrack:user.audioTrack};
      setUsers((previousUsers) =>{
        const existingUserIndex = previousUsers.findIndex(u => u.uid === user.uid);
        if (existingUserIndex !== -1) {
          // If user exists, remove the old user and add the updated user object
          const updatedUsers = [...previousUsers];
          updatedUsers[existingUserIndex] = { ...userWithTracks, staging: true }; // Replace the existing user
          return updatedUsers;
        }
        else
          return [...previousUsers, { ...userWithTracks, staging: true }]
      });
    }
    user.audioTrack.play();
  };


  // this function called a user left the channel for remote user
  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };
  useEffect(() => {
    // after the local user join the room we call remote users ok
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);
    // join the channel
    if (parseInt(user_id) === parseInt(channel)) {
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
          setLocalTracks(tracks);
          setUsers((previousUsers) => [...previousUsers, { uid, videoTrack, audioTrack, staging: true }]);
          client.publish(tracks);
        });
    }
    else {
      if (!reload) {
        client
          .join(APP_ID, CHANNEL, TOKEN, user_id)
        setUsers((previousUsers) => [...previousUsers, { uid: user_id, videoTrack: "", audioTrack: "", staging: false }]);
      }
      if (reload) {
        client
          .join(APP_ID, CHANNEL, TOKEN, user_id).then((uid) =>
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
            setUsers((previousUsers) => {
              return previousUsers.map(user =>
                user.uid == uid
                  ? { ...user, staging: true, videoTrack, audioTrack }
                  : user
              );
            });

            client.publish(tracks);
          });
      }
    }
    
    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.leave();
    };
  }, [reload]);

  const count = users.filter(item => item.staging == true).length;
  console.log('users:', users);
  return (
    <div className='mt-2  h-[90vh] '>

      <div className='flex justify-end items-center gap-1'>
        <p className='text-sm text-brown font-bold'>{totalUsers}</p>
        <FaRegEye className='text-brown' />
      </div>
      <div className={`mt-5 h-full flex flex-col gap-2 ${count > 2 ? 'flex-wrap' : ''}`}>
        {users.map((user, index) => (
          user.staging && <VideoPlayer key={index} user={user} length={count} />
        ))}
        <Rtm setUsers={setUsers} user_id={user_id} channel_rtm={channel} token_rtm={token_rtm}
          localTracks={localTracks} setTotalUsers={setTotalUsers} setReload={setReload} reload={reload} users={users} />
      </div>
    </div>
  );
};

export default VideoRoom;



