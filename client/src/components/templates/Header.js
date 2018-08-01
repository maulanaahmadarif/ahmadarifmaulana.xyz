import React, { Component } from 'react';

import Logo from '../Logo';
// import Menu from '../Menu';

class Header extends Component {
  headerDown() {
    const headerDOM = document.querySelector('header');
    return window.scrollY > 10 ? headerDOM.classList.add('header__shadow') : headerDOM.classList.remove('header__shadow');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.headerDown)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.headerDown)
  }
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row-fx justify-between align-items-center">
            <div className="fx-6 fx-md-2">
              <Logo />
            </div>
            <div className="fx-6 fx-md-2">
              {/* <Menu /> */}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;