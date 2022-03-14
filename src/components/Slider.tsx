import React, { Dispatch, SetStateAction } from 'react';
import './Slider.css'

interface AudioProps {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
}

//Generic slider used to controll the volume in AudioControls.tsx

function Slider(props: AudioProps) {

    const handleChange = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        //setValue(Number(target.value));
        props.setValue(Number(target.value));
    }

    return (
        <div className="slidecontainer">
            <input type="range" min="0" max="100" value={props.value} className="slider" id="myRange" onChange={e => handleChange(e)} />
        </div>
    );
}

export default Slider;