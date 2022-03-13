import React, { useState, useEffect } from "react";

import VideoBackground from "./components/VideoBackground";
import AudioControl from "./components/AudioControl";
import MusicPicker from "./components/MusicPicker";
import Configs from "./components/Configs";
import Window from "./components/Window";

import "./YoutubeRadio.css";

function YoutubeRadio() {

  const [volume, setVolume] = useState(100);
  const [play, setPlay] = useState(true);
  const [mute, setMute] = useState(false);
  const [video, setVideo] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

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
    <Window>
      <VideoBackground
        video={video}
        windowDimensions={windowDimensions}
        play={play}
        mute={mute}
        volume={volume}
      />
      <div className="window-content">
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
          <Configs video={video} setVideo={setVideo} />
        </div>
      </div>
    </Window>
  );
}

export default YoutubeRadio;