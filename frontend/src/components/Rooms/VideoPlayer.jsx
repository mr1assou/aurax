import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ user, length}) => {
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
          videoElement.style.objectFit = 'cover'; // Ensure video fits the container
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
      className={`bg-white ${length <= 4 ? 'h-48' : length <= 6 ? 'h-32' : 'h-24'
        }`}
    >
    </div>

  );
};
