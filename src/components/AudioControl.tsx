import React, { Dispatch, SetStateAction } from "react";

import { faPlay, faCaretRight, faCaretLeft, faVolumeUp, faPause, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import Slider from "./Slider";

import "./AudioControl.css"

interface AudioProps {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;

  play: boolean;
  setPlay: Dispatch<SetStateAction<boolean>>;

  mute: boolean;
  setMute: Dispatch<SetStateAction<boolean>>;

  radiosStations: any;
  stationIndex: number;
  setStationIndex: Dispatch<SetStateAction<number>>;

}

// controls the volume of the song play/pause and change the current song for one next or before

function AudioControl(props: AudioProps) {

  return (
    <div className="audio-controls-container">

      {/* change song for the one before */}
      <motion.button
        className="changeSong-button audio-button-base"
        onClick={() => props.setStationIndex((props.stationIndex - 1) % props.radiosStations.length)}
      >
        <FontAwesomeIcon icon={faCaretLeft} fontSize="20" color="white" />
      </motion.button>

      {/* change song for the one next */}
      <motion.button
        className="changeSong-button audio-button-base"
        onClick={() => props.setStationIndex((props.stationIndex + 1) % props.radiosStations.length)}
      >
        <FontAwesomeIcon icon={faCaretRight} fontSize="20" color="white" />
      </motion.button>

      {/* play pause */}
      <motion.button
        className="play-button audio-button-base"
        onClick={() => props.setPlay(!props.play)}
      >
        <FontAwesomeIcon icon={props.play ? faPause : faPlay} fontSize="40" color="white" style={{ paddingLeft: props.play ? '1px' : '6px' }} />
      </motion.button>

      <div className="sound-button-container">

        {/* volume */}
        <motion.button className="sound-button audio-button-base" onClick={() => props.setMute(!props.mute)}>
          <FontAwesomeIcon icon={props.mute ? faVolumeMute : faVolumeUp} fontSize="20" color="white" />
        </motion.button>
        <Slider value={props.volume} setValue={props.setVolume} />
      </div>
    </div>
  );
}

export default AudioControl;
