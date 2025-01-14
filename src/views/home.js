import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero3 from '../components/hero3'
import Features10 from '../components/features10'
import Steps1 from '../components/steps1'
import Footer8 from '../components/footer8'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Proper Young Opossum</title>
        <meta property="og:title" content="Proper Young Opossum" />
      </Helmet>
      <Navbar3
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Portfolio</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text14">Contact Us</span>
          </Fragment>
        }
      ></Navbar3>
      <Hero3
        action1={
          <Fragment>
            <span className="home-text15">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text16">Book Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text17">
              Discover the perfect getaway for your family
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text18">Create Unforgettable Memories</span>
          </Fragment>
        }
      ></Hero3>
      <Features10
        slogan={
          <Fragment>
            <span className="home-text19">Create Lasting Memories</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="home-text20">Book Your Getaway Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="home-text21">Our Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text22">Luxurious Accommodations</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text23">Exciting Activities</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text24">Gourmet Dining</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="home-text25">Learn More</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="home-text26">
              Discover the features that make our family getaways unforgettable.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text27">
              Stay in top-rated resorts and hotels that cater to families of all
              sizes.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text28">
              Enjoy a variety of activities suitable for all ages, from
              thrilling adventures to relaxing pastimes.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text29">
              Indulge in delicious meals prepared by renowned chefs, with
              options to please even the pickiest eaters.
            </span>
          </Fragment>
        }
      ></Features10>
      <Steps1
        step1Title={
          <Fragment>
            <span className="home-text30">
              Explore Top-Rated Accommodations
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text31">
              Enjoy Exciting Activities for All Ages
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text32">
              Indulge in Gourmet Dining Options
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text33">
              Create Lasting Memories with Loved Ones
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text34">
              Discover our luxurious accommodations that cater to families of
              all sizes. From spacious suites to cozy cabins, we have the
              perfect lodging options for your getaway.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text35">
              Participate in a wide range of activities designed to entertain
              every member of your family. Whether you prefer outdoor adventures
              or indoor fun, there&apos;s something for everyone.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text36">
              Savor delicious meals prepared by our talented chefs using the
              finest ingredients. Our gourmet dining options ensure that every
              bite is a culinary delight for you and your loved ones.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text37">
              Make unforgettable memories with your family during your stay.
              Cherish quality time together as you bond over new experiences and
              adventures.
            </span>
          </Fragment>
        }
      ></Steps1>
      <Footer8
        link1={
          <Fragment>
            <span className="home-text38">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text39">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text40">Destinations</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text41">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text42">Book Now</span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="home-text43">FAQs</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="home-text44">Terms &amp; Conditions</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="home-text45">Privacy Policy</span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="home-text46">Cookies Policy</span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="home-text47">Site Map</span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home-text48">
              © 2023 Family Getaways. All Rights Reserved.
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text49">#</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text50">#</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text51">#</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="home-text52">Explore</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="home-text53">Legal</span>
          </Fragment>
        }
      ></Footer8>
    </div>
  )
}

export default Home
