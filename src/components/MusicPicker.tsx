import React from "react";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import "./MusicPicker.css"

function MusicPicker() {

  const RadioStationsList = (amount: number) => {
    let total = [];
    for (let index = 0; index < amount; index++) {
      total.push(
        <motion.button
          className="radioStations-button"
          whileHover={{ scale: 1.2, marginLeft: '40px', opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="radioStations-button-content" >
            <FontAwesomeIcon icon={faPlay} fontSize="15" />
            <p className="radioStations-name">{"song " + index}</p>
          </div>
        </motion.button>
      );
    }
    return total;
  };

  return (
    <div className="radioStations-constainer">
      <SimpleBar style={{ height: '100%', width: '100%' }}>
        {RadioStationsList(20)}
      </SimpleBar>
    </div>
  );
}

export default MusicPicker;
