import React from 'react';

const Section = ({ children, sectionGray, sectionName, noCenter, sectionClass }) => {
  return (
    <div className={`am-section ${sectionClass ? sectionClass : '' } ${sectionGray ? 'am-section__gray' : ''} ${noCenter ? 'am-section__no-center' : ''}`}>
      { sectionName }
      <div className="container">
        { children }
      </div>
    </div>
  )
}

export default Section;