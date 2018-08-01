import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 2em;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <a href="/" className="am-wave">
        <strong>{ `{ AM }` }</strong>
        <span className="am-the-wave"></span>
      </a>
    </LogoContainer>
  )
}

export default Logo;