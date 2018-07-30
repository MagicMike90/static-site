import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default ({
  data: {
    allArticlesJson: { edges },
  },
}) => (
  <div>
    <h1>Local Articles</h1>
    <Link to="/">Home</Link>
    <ul>{edges.map(({ node: { title } }) => <li key={title}>{title}</li>)}</ul>
  </div>
)
export const query = graphql`
  query LocalArticles {
    allArticlesJson(filter: { topic: { eq: "local" } }) {
      edges {
        node {
          topic
          title
        }
      }
    }
  }
`
