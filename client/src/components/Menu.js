import React, { Component } from 'react';
import styled from 'styled-components';

const Line = styled.div`
  height: 3px;
  width: 22px;
  background-color: rgba(0,0,0,.8);
  margin-bottom: 4px;
  border-radius: 3px;
`;

const Hamburger = styled.div`
  display: table;
  margin-left: auto;
  cursor: pointer;
`;


class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Hamburger>
          <Line />
          <Line />
          <Line />
        </Hamburger>
      </div>
    )
  }
}

export default Menu;