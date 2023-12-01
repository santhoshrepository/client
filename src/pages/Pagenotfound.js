import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout title={'go back - page not found'}>
      <div className="pnf">
        {/* <h1 className="pnf-title">404</h1> */}
        <img
          src="/images/404.jpg" // Replace with the correct image path
          alt="404 Error"
          style={{ width: '150px', height: '150px' }} // Adjust the width and height as needed
        />
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  )
}

export default Pagenotfound
