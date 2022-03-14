import React, { useState, useEffect } from "react";

import VideoBackground from "./components/VideoBackground";
import AudioControl from "./components/AudioControl";
import MusicPicker from "./components/MusicPicker";
import Configs from "./components/Configs";
import Window from "./components/Window";
import { LoadInf } from "./data/SaveLoadInf";

import "./YoutubeRadio.css";

function YoutubeRadio() {

  const [volume, setVolume] = useState(100);
  const [play, setPlay] = useState(true);
  const [mute, setMute] = useState(false);
  const [video, setVideo] = useState(true);
  const [stationIndex, setStationIndex] = useState(0);
  const [stations, setStations] = useState<any>([]);
  const [doneGettingData, setDoneGettingData] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    //adjust the video size when the screen is resized
    function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    //get the songs stored in memory when the app opens
    setStations(LoadInf().data.stations);
    setDoneGettingData(true);
  }, [])

  return (
    <Window>
      <VideoBackground
        video={video}
        windowDimensions={windowDimensions}
        play={play}
        mute={mute}
        volume={volume}
        url={doneGettingData ? stations[stationIndex].url : ''}
      />
      <div className="window-content">
        <div className="topBar" >
          <p className="project-tittle">Youtube Radio</p>
        </div>
        <div className="content">
          <MusicPicker
            radiosStations={stations}
            stationIndex={stationIndex}
            setStationIndex={setStationIndex}
          />
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
            radiosStations={stations}
            stationIndex={stationIndex}
            setStationIndex={setStationIndex}
          />
          <Configs
            video={video}
            setVideo={setVideo}
            radiosStations={stations}
          />
        </div>
      </div>
    </Window>
  );
}

export default YoutubeRadio;