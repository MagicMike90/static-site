import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <p>Choose an article category</p>
      <ul>
        <li>
          <Link to="/global/">Global</Link>
        </li>
        <li>
          <Link to="/local/">Local</Link>
        </li>

        <li>
          <Link to="/sports/">Sports</Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
