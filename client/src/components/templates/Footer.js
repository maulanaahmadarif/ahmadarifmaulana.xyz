import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';

class Footer extends Component {
  renderContact() {
    if (this.props.siteData.contacts) {
      return (
        <span><strong>Contact</strong> - <a href={`mailto:${this.props.siteData.contacts.email}`}>{this.props.siteData.contacts.email}</a> / <a href={`tel:${this.props.siteData.contacts.phone}`}>{this.props.siteData.contacts.phone}</a></span>
      )
    }
  }

  renderSocialMedia() {
    if (this.props.siteData.social_media) {
      return (
        <span><strong>Follow</strong> - <a href={this.props.siteData.social_media.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>&nbsp;<a href={this.props.siteData.social_media.instagram} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></span>
      )
    }
  }

  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row-fx justify-between">
            <div className="fx-12 fx-md-6 o-2 o-md-1">
              <div className="am-copyright">
                <span>&copy; 2018 AM. All Rights Reserved</span>
              </div>
            </div>
            <div className="fx-12 fx-md-6 o-1 o-md-2">
              <div className="am-contact">
                { this.renderContact() }
                <span><strong>Hire me ?</strong> - <a href={this.props.siteData.cv_link}>My CV</a></span>
                { this.renderSocialMedia() }
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

const mapStateToProps = ({ siteData }) => ({ siteData })

export default connect(mapStateToProps)(Footer);