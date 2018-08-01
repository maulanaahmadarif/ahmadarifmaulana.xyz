import React from 'react';

const Testimoni = ({ text, name, position }) => {
  return (
    <div className="am-testimoni text-center">
      <p>
        { text }
      </p>
      <p className="am-testimoni-name">
        <strong>{ name }</strong><br/>
        { position }
      </p>
    </div>
  )
}

export default Testimoni;