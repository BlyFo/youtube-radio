import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import "./MusicPicker.css"

interface MusicPickerProps {
  radiosStations: any;
  stationIndex: number;
  setStationIndex: Dispatch<SetStateAction<number>>;
}

//Gets the list of radio stations and dysplays it on screen

function MusicPicker(props: MusicPickerProps) {
  const updateValue = (index: number) => {
    props.setStationIndex(index);
    console.log(props.stationIndex);
  }

  const RadioStationsList = () => {
    let total = [];
    for (let index = 0; index < props.radiosStations.length; index++) {
      total.push(
        <motion.button
          key={props.radiosStations[index].name + index}
          className="radioStations-button"
          style={{ opacity: props.stationIndex === index ? 0.8 : 0.5 }}
          whileHover={{ scale: 1.07, marginLeft: '30px', opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => updateValue(index)}
        >
          <div className="radioStations-button-content" >
            <FontAwesomeIcon icon={faPlay} fontSize="15" />
            <p className="radioStations-name">{props.radiosStations[index].name}</p>
          </div>
        </motion.button>
      );
    }
    return total;
  };

  return (
    <div className="radioStations-constainer">
      <SimpleBar style={{ height: '100%', width: '100%' }}>
        {RadioStationsList()}
      </SimpleBar>
    </div>
  );
}

export default MusicPicker;
