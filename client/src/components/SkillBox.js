import React from 'react';

const SkillBox = ({ logo, children }) => {
  return (
    <div className="am-skill-box">
      <div className="am-frame">
        <img src={logo} alt="" className="am-image-gray"/>
      </div>
      <div className="am-skill-box__text">
        { children }
      </div>
    </div>
  )
}

export default SkillBox;