import React from 'react'
import Layout from './../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'
const Contact = () => {
  return (
    <Layout title={'Contact us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about quality and freshness of meat, feel free to
            call anytime we 24X7 available
            <p className="text-justify mt-2"> ADDRESS </p>
            <p className="text-justify mt-2">
              123/38/1, BHUVANESHWARI NAGAR, COFFEE BOARD MAIN ROAD LANDMARK:,
              BEHIND ST JOHN'S SCHOOL, BENGALURU, KARNATAKA 560024, INDIA
            </p>
            <p className="text-justify mt-2">TIMING TUE-SUN: 7 AM TO 7 PM</p>
            <p className="text-justify mt-2">MONDAY CLOSED HOLIDAY</p>
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@finsandfeathers.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 076248 27892
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
