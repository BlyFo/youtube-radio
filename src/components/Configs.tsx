import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons';

import './Configs.css'

function Configs() {
    return (
        <div className='settings-button-container'>
            <button className="settings-button" >
                <FontAwesomeIcon icon={faGear} style={{ marginRight: '1px' }} fontSize="20" color="white" />
            </button>
        </div>
    );
}

export default Configs;