import React, { useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCaretRight, faCaretLeft, faVolumeUp, faPause, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import Slider from "./Slider";
import "./AudioControl.css"

interface AudioProps {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;

  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;

  mute: boolean;
  setMute: Dispatch<SetStateAction<boolean>>;
}

function AudioControl(props: AudioProps) {

  return (
    <div className="audio-controls-container">
      <motion.button className="changeSong-button audio-button-base" >
        <FontAwesomeIcon icon={faCaretLeft} fontSize="20" color="white" />
      </motion.button>
      <motion.button className="changeSong-button audio-button-base" >
        <FontAwesomeIcon icon={faCaretRight} fontSize="20" color="white" />
      </motion.button>
      <motion.button className="play-button audio-button-base" onClick={() => props.setPlay(!props.play)}>
        <FontAwesomeIcon icon={props.play ? faPause : faPlay} fontSize="40" color="white" style={{ paddingLeft: props.play ? '1px' : '6px' }} />
      </motion.button>
      <div className="sound-button-container">
        <motion.button className="sound-button audio-button-base" onClick={() => props.setMute(!props.mute)}>
          <FontAwesomeIcon icon={props.mute ? faVolumeMute : faVolumeUp} fontSize="20" color="white" />
        </motion.button>
        <Slider value={props.volume} setValue={props.setVolume} />
      </div>
    </div>
  );
}

export default AudioControl;
