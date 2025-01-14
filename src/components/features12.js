import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features12.css'

const Features12 = (props) => {
  return (
    <div className="features12-layout349 thq-section-padding">
      <div className="features12-max-width thq-section-max-width">
        <video
          src={props.featureVideoSrc}
          loop="true"
          muted="true"
          poster={props.featureVideoPoster}
          autoPlay="true"
          className="features12-video thq-img-ratio-16-9"
        ></video>
        <div className="features12-section-title">
          <span className="features12-text1 thq-body-small">
            {props.featureSlogan ?? (
              <Fragment>
                <span className="features12-text5">
                  Luxurious Family Getaways for Lasting Memories
                </span>
              </Fragment>
            )}
          </span>
          <div className="thq-flex-column">
            <h2 className="features12-text2 thq-heading-2">
              {props.featureTitle ?? (
                <Fragment>
                  <span className="features12-text4">
                    Luxury Family Getaways at Your Fingertips
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features12-text3 thq-body-large">
              {props.featureDescription ?? (
                <Fragment>
                  <span className="features12-text8">
                    Indulge in top-rated accommodations that cater to families
                    of all sizes and preferences.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features12-actions thq-flex-row">
            <button className="thq-button-filled features12-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features12-text7">
                      Book your luxurious family getaway now and create
                      unforgettable memories.
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features12-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features12-text6">
                      Explore our wide range of family-friendly activities
                      suitable for all ages.
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features12.defaultProps = {
  featureVideoSrc:
    'https://videos.pexels.com/video-files/854045/854045-hd_1920_1080_30fps.mp4',
  featureTitle: undefined,
  featureSlogan: undefined,
  secondaryAction: undefined,
  featureVideoPoster:
    'https://images.pexels.com/videos/854045/pictures/preview-0.jpg',
  mainAction: undefined,
  featureDescription: undefined,
}

Features12.propTypes = {
  featureVideoSrc: PropTypes.string,
  featureTitle: PropTypes.element,
  featureSlogan: PropTypes.element,
  secondaryAction: PropTypes.element,
  featureVideoPoster: PropTypes.string,
  mainAction: PropTypes.element,
  featureDescription: PropTypes.element,
}

export default Features12
