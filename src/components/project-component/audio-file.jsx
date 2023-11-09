import React, { useEffect, useRef, useMemo, useState } from 'react';
import './audio-player.css'; // Import the CSS file
import test1 from '../../../src/audio-test/audio-projects/test1.wav';
import test2 from '../../../src/audio-test/audio-projects/test2.wav';
import test3 from '../../../src/audio-test/audio-projects/test3.wav';

function AudioPlayer() {
  const audioRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);

  const audioSources = useMemo(
    () => [test1, test2, test3],
    []
  );

  const [currentAudioIn, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    const audioElements = audioRefs.current.map((ref) => ref.current);
    
    const handleEnded = (playerIndex) => {
      setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % audioElements.length);
    };

    audioElements.forEach((audioElement, index) => {
      audioElement.addEventListener('ended', () => handleEnded(index));
    });

    return () => {
      audioElements.forEach((audioElement, index) => {
        audioElement.removeEventListener('ended', () => handleEnded(index));
      });
    };
  }, [audioRefs]);

  return (
    <div className="audio-player">
      {/* Rest of your component JSX */}
      {audioSources.map((source, index) => (
        <audio key={index} ref={audioRefs.current[index]} controls>
          <source src={source} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      ))}
    </div>
  );
}

export default AudioPlayer;