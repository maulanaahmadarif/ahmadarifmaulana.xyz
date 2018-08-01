import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Parser } from 'html-to-react';

import Section from './templates/Section';
import PortfolioSlide from './PortfolioSlide';
import SectionName from './templates/SectionName';
import SkillBox from './SkillBox';
import Testimoni from './Testimoni';

const ClientLogo = styled.div`
  max-width: 100px;
  margin: 0 auto;
  margin-bottom: 1em;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const TextShadow = styled.div`
  @media (max-width: 768px) {
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  }
`;

const htmlParser = new Parser();

class Home extends Component {
  renderPortfolios() {
    if (this.props.siteData.portfolios) {
      return this.props.siteData.portfolios.map((portfolio) => {
        return (
          <div key={portfolio.id}>
            <PortfolioSlide image={portfolio.logo} title={portfolio.name} content={portfolio.content} category={portfolio.category} link={portfolio.link} />
          </div>
        )
      })
    }
  }

  renderSkills() {
    if (this.props.siteData.skills) {
      return this.props.siteData.skills.map((skill) => {
        return (
          <div className="fx-6 fx-md-3" key={skill.id}>
            <SkillBox logo={skill.logo}>
              { htmlParser.parse(skill.content) }
            </SkillBox>
          </div>
        )
      })
    }
  }

  renderTestimonials() {
    if (this.props.siteData.testimonials) {
      return this.props.siteData.testimonials.map((testimonial) => {
        return (
          <div key={testimonial.id}>
            <Testimoni name={ testimonial.name } position={ testimonial.position } text={testimonial.content} />
          </div>
        )
      })
    }
  }

  renderClients() {
    if (this.props.siteData.clients) {
      return this.props.siteData.clients.map((client) => {
        return (
          <div className="fx-6 fx-md-3" key={client.id}>
            <ClientLogo>
              <img src={client.logo} alt="" className="am-image-gray"/>
            </ClientLogo>
          </div>
        )
      })
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      customPaging: (i) => {
        return <div className="am-slick-stripe"></div>
      },
      className: "am-slick-stripe-container"
    }
    const settingTestimoni = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dotsClass: "slick-dots am-slick-dots"
    }
    
    return (
      <div className="am-page__home">
        <Section sectionGray sectionName={<SectionName number="01" name="WHO AM I" />} sectionClass="am-section__hero">
          <div className="row-fx align-items-center justify-between">
            <div className="fx-12 fx-md-6">
              <div className="am-hero">
                <h1 className="am-hover-animation">I'M { this.props.siteData.name }<br/>{ this.props.siteData.position }</h1>
                <div className="am-separator"></div>
                <TextShadow>
                  { htmlParser.parse(this.props.siteData.about) }
                </TextShadow>
              </div>
            </div>
          </div>
        </Section>
        <Section sectionName={<SectionName number="02" name="PORTFOLIO" />} noCenter>
          <div className="row-fx align-items-center">
            <div className="fx-12">
              <Slider {...settings}>
                { this.renderPortfolios() }
              </Slider>
            </div>
          </div>
        </Section>
        <Section sectionGray sectionName={<SectionName number="03" name="MY SKILL" />} noCenter>
          <div className="row-fx justify-center">
            { this.renderSkills() }
          </div>
        </Section>
        <Section sectionName={<SectionName number="04" name="CLIENTS" />} noCenter>
          <div className="row-fx justify-center">
            <div className="fx-12 fx-md-8">
              <div className="am-title text-center">
                <h1>I LOVE MY CLIENTS</h1>
                <p>THEY SO AWESOME, WE HAS HAPPY MOMENTS TOGETHER!</p>
              </div>
              <Slider {...settingTestimoni}>
                { this.renderTestimonials() }
              </Slider>
            </div>
          </div>
          <div className="row-fx justify-center" style={{ marginTop: '4em' }}>
            { this.renderClients() }
          </div>
        </Section>
      </div>
    )
  }
}

const mapStateToProps = ({ siteData }) => ({ siteData })

export default connect(mapStateToProps)(Home);