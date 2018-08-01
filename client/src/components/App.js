import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from './Home';
import Header from './templates/Header';
import Footer from './templates/Footer';

class App extends Component {
  componentDidMount() {
    this.props.getSiteData();
  }
  render() {
    return (
      <div className="am-page__home">
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default connect(null, actions)(App);