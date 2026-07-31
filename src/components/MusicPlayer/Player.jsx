/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  
useEffect(() => {
  if (!ref.current) return;

  if (isPlaying) {
    ref.current.play().catch((err) => {
      console.log(err);
    });
  } else {
    ref.current.pause();
  }
}, [isPlaying, activeSong]);


  useEffect(() => {
  if (!ref.current) return;
  ref.current.volume = volume;
}, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
  ref.current.currentTime = seekTime;
}, [seekTime]);
  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
