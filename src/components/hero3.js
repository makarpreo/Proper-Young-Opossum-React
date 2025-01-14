import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-flex-row thq-section-max-width">
          <div className="hero3-column1">
            <h1 className="thq-heading-1 hero3-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero3-text8">
                    Create Unforgettable Memories
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="hero3-column2">
            <p className="thq-body-large hero3-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero3-text7">
                    Discover the perfect getaway for your family
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero3-text5">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero3-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero3-text6">Book Now</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTEzODIwNzF8MA&ixlib=rb-4.0.3&w=1500',
  action1: undefined,
  action2: undefined,
  image1Alt: 'Image of a happy family enjoying a picnic',
  content1: undefined,
  heading1: undefined,
}

Hero3.propTypes = {
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero3
