import React from 'react';
import './Window.css'

interface WindowProps {
  children: React.ReactNode
}

//this module takes care of the dragable region on the top of the screen (with css),
//the background image (only visible when the video opation is deactivate in config),
//and the close button (not working)

function Window(props: WindowProps) {

  function close() {
    console.log('close');
    // TODO
  }

  return (
    <div className="background">
      <div className="background-filter" />
      <div className="header">
        <button className="header-button" onClick={() => close()}> X </button>
      </div>
      {props.children}
    </div>
  );
}

export default Window;