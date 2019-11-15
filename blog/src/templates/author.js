import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const UserTemplate = ({ data }) => (
  <Layout>
    <h1 style={{ marginTop: 0 }}>Posts by {data.strapiUsers.username}</h1>
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {data.allStrapiArticles.edges.map(article => (
        <li key={article.node.id}>
          <h2>
            <Link to={`/Articles_${article.node.id}`}>
              {article.node.title}
            </Link>
          </h2>
          <p>
            {article.node.content.substring(0, 250)}
            {article.node.content.length > 250 && "..."}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!, $strapiId: Int!) {
    strapiUsers(id: { eq: $id }) {
      id
      username
    }
    allStrapiArticles(
      sort: { fields: created_at, order: DESC }
      filter: { user: { id: { eq: $strapiId } } }
    ) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
