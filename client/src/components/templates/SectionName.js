import React from 'react';

const SectionName = ({ number, name }) => {
  return (
    <div className="am-section-name">
      <div className="am-section-name__number">
        <p>{number}</p>
      </div>
      <div className="am-section-name__title">
        {name}
      </div>
    </div>
  )
}

export default SectionName;