import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-flex-column thq-section-max-width">
        <div className="features10-section-title thq-flex-column">
          <span className="thq-body-small">
            {props.slogan ?? (
              <Fragment>
                <span className="features10-text14">
                  Create Lasting Memories
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2 features10-text11">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features10-text23">Our Features</span>
              </Fragment>
            )}
          </h2>
          <p className="features10-text12 thq-body-large">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features10-text13">
                  Discover the features that make our family getaways
                  unforgettable.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features10-text20">
                    Luxurious Accommodations
                  </span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features10-text21">
                    Stay in top-rated resorts and hotels that cater to families
                    of all sizes.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features10-text17">Exciting Activities</span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features10-text15">
                    Enjoy a variety of activities suitable for all ages, from
                    thrilling adventures to relaxing pastimes.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features10-text18">Gourmet Dining</span>
                </Fragment>
              )}
            </h3>
            <span className="thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features10-text19">
                    Indulge in delicious meals prepared by renowned chefs, with
                    options to please even the pickiest eaters.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <button className="features10-button1 thq-button-filled">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features10-text22">
                    Book Your Getaway Now
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="features10-button2 thq-button-outline">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features10-text16">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  sectionDescription: undefined,
  slogan: undefined,
  feature2ImageAlt: 'Exciting Activities Image',
  feature2Description: undefined,
  feature3ImageAlt: 'Gourmet Dining Image',
  secondaryAction: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
  feature1ImageAlt: 'Luxurious Accommodations Image',
  feature1Description: undefined,
  mainAction: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1663581254906-a2e5a5a3260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjQ3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1644705815782-5b1e58f308e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjQ3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1675278852139-b201bd89a086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNjg5MjQ3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features10.propTypes = {
  sectionDescription: PropTypes.element,
  slogan: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
}

export default Features10
