import { graphql } from 'gatsby'
import ArticleList from '../components/ArticleList'

export default ArticleList('Global Articles')

// export default ({ data: { allArticlesJson: { edges } } }) => (
//   <div>
//     <h1>Global Articles</h1>
//     <Link to="/">Home</Link>
//     <ul>
//       {edges.map(({ node: { title } }) => (
//         <li key={title}>{title}</li>
//       ))}
//     </ul>
//   </div>
// )

export const query = graphql`
  query GlobalArticles {
    allArticlesJson(filter: { topic: { eq: "global" } }) {
      edges {
        node {
          topic
          title
        }
      }
    }
  }
`
