import React from 'react'
import Layout from './../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-6">
          <p>
            Fins and Feathers store and use your data for providing better
            expected level of experience
          </p>
          <p>Key notes in privacy: </p>
          <p>
            Period of time logs of order history will be analyzed to enhance our
            ratio of products
          </p>
          <p>
            The privacy of data will be kept safely in our servers, also we do
            not sell your data.
          </p>

          <p>Agreement of privacy policy</p>
          <p>
            Fins and Feathers will take based on your permissions, we obtain
            your data.......
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
