import React, { useState, useEffect } from "react";

import AudioControl from "./components/AudioControl";
import MusicPicker from "./components/MusicPicker";
import ReactPlayer from "react-player";
import Configs from "./components/Configs";
import "./YoutubeRadio.css";

function YoutubeRadio() {
  const [volume, setVolume] = useState(100);
  const [play, setPlay] = useState(true);
  const [mute, setMute] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  function close() {
    console.log('close');
    // TODO
    console.log(windowDimensions);
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
      console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="background">
      <div className="background-filter" />
      <div className="header">
        <button className="header-button" onClick={() => close()}> X </button>
      </div>
      <ReactPlayer
        style={{
          position: 'fixed',
          display: 'flex',
          flex: 1,
          zIndex: 0,
          height: '100vh',
          width: '100vw',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        width={windowDimensions.width * 1.5}
        height={windowDimensions.height * 1.5}
        url="https://www.youtube.com/embed/5qap5aO4i9A"
        controls={false}
        playing={play}
        volume={mute ? 0 : volume / 100}
        pip={true}
        config={{ youtube: { playerVars: { rel: 0 } } }}
      />
      <div style={{ zIndex: 1, position: 'absolute', top: 0, left: 0 }}>
        <div className="topBar" >
          <p className="project-tittle">Youtube Radio</p>
        </div>
        <div className="content">
          <MusicPicker />
        </div>
        <div className="bottomBar">
          <div className="empty-container" />
          <AudioControl
            volume={volume}
            setVolume={setVolume}
            play={play}
            setPlay={setPlay}
            mute={mute}
            setMute={setMute}
          />
          <Configs />
        </div>
      </div>
    </div>
  );
}

export default YoutubeRadio;

/*
      {
              <ReactPlayer
              style={{
                position: 'fixed',
                display: 'flex',
                flex: 1,
                zIndex: 0,
                height: '100vh',
                width: '100vw',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              width={windowDimensions.width}
              height={windowDimensions.height}
              url="https://www.youtube.com/embed/5qap5aO4i9A"
              controls={false}
              playing={play}
              volume={volume / 100}
              pip={true}
              config={{ youtube: { playerVars: { rel: 0 } } }}
            />
          }
*/