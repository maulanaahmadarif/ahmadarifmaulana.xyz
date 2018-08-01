import React, { Component } from 'react';
import { Parser } from 'html-to-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const htmlParser = new Parser();

class PortfolioSlide extends Component {
  render() {
    const { image, title, content, category, link } = this.props;
    return (
      <div className="row-fx align-items-center">
        <div className="fx-12 fx-md-4">
          <div className="am-portfolio__image">
            <div className="am-frame">
              <img src={image} alt="" className="am-image-gray"/>
            </div>
          </div>
        </div>
        <div className="fx-12 fx-md-8">
          <div>
            <h1 className="text__uppercase am-hover-animation am-hover-animation__white">{ title }</h1>
            <p className="text__uppercase"><strong>{category}</strong></p>
            <div className="am-separator"></div>
            { htmlParser.parse(content) }
            <div style={{ marginTop: '4em' }}>
              <a href={link} target="_blank">Visit <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioSlide;