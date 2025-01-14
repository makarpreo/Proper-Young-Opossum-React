import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container1 thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container2">
          <div className="steps1-container3 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="steps1-image1 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps1-text28">
                    Explore Top-Rated Accommodations
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text11 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text22">
                    Discover our luxurious accommodations that cater to families
                    of all sizes. From spacious suites to cozy cabins, we have
                    the perfect lodging options for your getaway.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text12 thq-heading-3">01</label>
          </div>
          <div className="steps1-container4 thq-card">
            <img
              alt={props.step2Alt}
              src={props.step2ImageSrc}
              className="steps1-image2 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps1-text27">
                    Enjoy Exciting Activities for All Ages
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text14 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text24">
                    Participate in a wide range of activities designed to
                    entertain every member of your family. Whether you prefer
                    outdoor adventures or indoor fun, there&apos;s something for
                    everyone.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text15 thq-heading-3">02</label>
          </div>
        </div>
        <div className="steps1-container5">
          <div className="steps1-container6 thq-card">
            <img
              alt={props.step3ImageAlt}
              src={props.step3ImageSrc}
              className="steps1-image3 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps1-text25">
                    Indulge in Gourmet Dining Options
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text17 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text23">
                    Savor delicious meals prepared by our talented chefs using
                    the finest ingredients. Our gourmet dining options ensure
                    that every bite is a culinary delight for you and your loved
                    ones.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text18 thq-heading-3">03</label>
          </div>
          <div className="steps1-container7 thq-card">
            <img
              alt={props.step4ImageAlt}
              src={props.step4ImageSrc}
              className="steps1-image4 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step4Title ?? (
                <Fragment>
                  <span className="steps1-text29">
                    Create Lasting Memories with Loved Ones
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text20 thq-body-small">
              {props.step4Description ?? (
                <Fragment>
                  <span className="steps1-text26">
                    Make unforgettable memories with your family during your
                    stay. Cherish quality time together as you bond over new
                    experiences and adventures.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text21 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps1.defaultProps = {
  step2ImageSrc:
    'https://images.unsplash.com/photo-1587235587172-f05eee42fdac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  step3ImageAlt: 'Gourmet Dining Image',
  step1Description: undefined,
  step4ImageSrc:
    'https://images.unsplash.com/photo-1695553952259-ca9e649c60b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  step3Description: undefined,
  step2Description: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step2Title: undefined,
  step1ImageSrc:
    'https://images.unsplash.com/photo-1709000416378-c8c6ab948859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjgxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  step1Title: undefined,
  step4Title: undefined,
  step3ImageSrc:
    'https://images.unsplash.com/photo-1620052800096-e2861f0e1e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjgxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  step1ImageAlt: 'Luxurious Accommodations Image',
  step2Alt: 'Exciting Activities Image',
  step4ImageAlt: 'Family Memories Image',
}

Steps1.propTypes = {
  step2ImageSrc: PropTypes.string,
  step3ImageAlt: PropTypes.string,
  step1Description: PropTypes.element,
  step4ImageSrc: PropTypes.string,
  step3Description: PropTypes.element,
  step2Description: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step2Title: PropTypes.element,
  step1ImageSrc: PropTypes.string,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step3ImageSrc: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step2Alt: PropTypes.string,
  step4ImageAlt: PropTypes.string,
}

export default Steps1
