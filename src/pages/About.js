import React from 'react'
import Layout from './../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About us - Fins and Feathers'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Fins & Feathers has a great selection of fresh fish & poultry meats.
            We guarantee the highest quality products. Come in and see our
            friendly, experienced staff. Fins & Feathers your one-stop shop for
            all things Fresh Fish & Poultry requirement.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
