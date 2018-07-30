import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

export default title => ({
  data: {
    allArticlesJson: { edges },
  },
}) => (
  <Layout>
    <h1>{title}</h1>
    <Link to="/">Home</Link>
    <ul>{edges.map(({ node: { title } }) => <li key={title}>{title}</li>)}</ul>
  </Layout>
)
