import React, { useState, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

import './Configs.css'

interface ConfigProps {
  video: boolean;
  setVideo: Dispatch<SetStateAction<boolean>>;
}

function Configs(props: ConfigProps) {

  const [open, setOpen] = useState(false);
  const [newVideoName, setNewVideoName] = useState("");
  const [newVideoUrl, setNewVideoUrl] = useState("");

  const toggleSwitch = () => props.setVideo(!props.video);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className='settings-button-container'>
      <button className="settings-button" onClick={() => setOpen(true)} >
        <FontAwesomeIcon icon={faGear} style={{ marginRight: '0px' }} fontSize="20" color="white" />
      </button>
      {
        open &&
        <div className='modal'>
          <div className='modal-main'>
            <button className='modal-close' onClick={() => setOpen(false)}>X</button>
            <div style={{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 10px)', height: 'calc(100% - 30px)', marginTop: '30px', marginLeft: '10px' }}>
              <div className='configs-container'>
                <p style={{ padding: 0, margin: 0, marginBottom: '5px' }}>Background video: </p>
                <div className="switch" data-isOn={props.video} onClick={toggleSwitch}>
                  <motion.div className="handle" layout transition={spring} />
                </div>
              </div>
              <div className='configs-container'>
                <p style={{ padding: 0, margin: 0, marginBottom: '5px', marginRight: '5px' }}>Window mode: </p>
                <button className='config-type-window'>Normal</button>
                <button className='config-type-window'>Slim</button>
                <button className='config-type-window'>Compact</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column', marginTop: '10px' }}>
                <p style={{ padding: 0, margin: 0 }}>Add new station: </p>
                <div style={{ display: 'flex', width: '90%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                  <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ padding: 0, margin: 0, marginBottom: '5px', marginRight: '5px' }}>
                      Name:
                    </p>
                    <input className='config-inpuText' type="text" value={newVideoName} onChange={e => setNewVideoName(e.target.value)} />
                  </div>
                  <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ padding: 0, margin: 0, marginBottom: '5px', marginRight: '5px' }}>
                      Url:
                    </p>
                    <input className='config-inpuText' type="text" value={newVideoUrl} onChange={e => setNewVideoUrl(e.target.value)} />
                  </div>
                  <button className='config-type-window' style={{ marginTop: '8px' }}> Add new Station</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Configs;