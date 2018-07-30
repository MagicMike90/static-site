import ArticleList from '../components/ArticleList'
import { graphql } from 'gatsby'

export default ArticleList('Sports Articles')

export const query = graphql`
  query SportsArticles {
    allArticlesJson(filter: { topic: { eq: "sports" } }) {
      edges {
        node {
          topic
          title
        }
      }
    }
  }
`
