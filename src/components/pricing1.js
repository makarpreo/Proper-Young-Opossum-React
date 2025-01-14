import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing1.css'

const Pricing1 = (props) => {
  return (
    <div className="pricing1-pricing1 thq-section-padding">
      <div className="pricing1-max-width thq-section-max-width">
        <div className="pricing1-section-title">
          <span className="pricing1-text10 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="pricing1-text22">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="pricing1-content1">
            <h2 className="pricing1-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing1-text24">
                    Choose Your Perfect Getaway Package
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="pricing1-text12 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="pricing1-text29">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="pricing1-content2 thq-card">
          <div className="pricing1-price">
            <p className="pricing1-text13 thq-body-large">
              {props.plan1 ?? (
                <Fragment>
                  <span className="pricing1-text25">Luxury Escape</span>
                </Fragment>
              )}
            </p>
            <h3 className="pricing1-text14 thq-heading-3">
              {props.plan1Price ?? (
                <Fragment>
                  <span className="pricing1-text35">$1500</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.plan1Yearly ?? (
                <Fragment>
                  <span className="pricing1-text32">
                    per person for 3 nights
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="pricing1-list">
            <div className="pricing1-list-item1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature1 ?? (
                  <Fragment>
                    <span className="pricing1-text33">
                      Luxurious accommodations at top-rated resorts
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature2 ?? (
                  <Fragment>
                    <span className="pricing1-text23">
                      Exciting outdoor activities such as hiking, kayaking, and
                      zip-lining
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature3 ?? (
                  <Fragment>
                    <span className="pricing1-text28">
                      Gourmet dining experience with meals prepared by renowned
                      chefs
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature4 ?? (
                  <Fragment>
                    <span className="pricing1-text26">
                      Access to spa facilities and relaxation amenities
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="pricing1-list-item5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">
                {props.plan1Feature5 ?? (
                  <Fragment>
                    <span className="pricing1-text34">
                      Guided tours and cultural experiences included
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <button className="pricing1-button thq-button-filled">
            <span className="thq-body-small">
              {props.plan1Action ?? (
                <Fragment>
                  <span className="pricing1-text27">Book Now</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Pricing1.defaultProps = {
  content1: undefined,
  plan1Feature2: undefined,
  heading1: undefined,
  plan1: undefined,
  plan1Feature4: undefined,
  plan1Action: undefined,
  plan1Feature3: undefined,
  content2: undefined,
  plan1Yearly: undefined,
  plan1Feature1: undefined,
  plan1Feature5: undefined,
  plan1Price: undefined,
}

Pricing1.propTypes = {
  content1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  heading1: PropTypes.element,
  plan1: PropTypes.element,
  plan1Feature4: PropTypes.element,
  plan1Action: PropTypes.element,
  plan1Feature3: PropTypes.element,
  content2: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature5: PropTypes.element,
  plan1Price: PropTypes.element,
}

export default Pricing1
