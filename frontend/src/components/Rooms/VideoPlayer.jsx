import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ user, length}) => {
  console.log('length:',length)
  const videoRef = useRef(null);
  useEffect(() => {
    if (!user || !videoRef.current) return;
    // Play video track for local user
    if (user.videoTrack) {
      user.videoTrack.play(videoRef.current);
      // Wait for the video element to be added, then apply styles
      const interval = setInterval(() => {
        const videoElement = videoRef.current.querySelector('video');
        if (videoElement) {
          videoElement.style.width = '100%'; // Full width
          videoElement.style.height = '100%'; // Full height
          videoElement.style.borderRadius='8px';
          videoElement.style.objectFit = 'cover'; // Ensure video fits the container
          videoElement.style.border = '3px solid #b87c4c'; // Brown border
          clearInterval(interval); // Stop checking once the video element is styled
        }
      }, 50);
    }
    // Play audio track for local user
    // if (user.audioTrack) {
    //   user.audioTrack.play();
    // }
    // Cleanup function
    return () => {
      if (user.videoTrack) {
        user.videoTrack.stop();
      }
      if (user.audioTrack) {
        user.audioTrack.stop();
      }
    };
  }, [user]);
  return (
    <div
      ref={videoRef}
      className={`rounded-2xl ${ 
        length === 2 ? 'h-[40%] w-full' : 
        length >= 3 ? 'h-[40%] w-[40%]' : 
        length >= 5 ? 'h-[30%] w-[30%]' : 
        length >= 7 ? 'h-[20%] w-[20%]' : 
        'h-[75%] w-full'
      }`}
    >
    </div>

  );
};
