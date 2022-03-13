import React from 'react';
import './Window.css'

interface WindowProps {
  children: React.ReactNode
}


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